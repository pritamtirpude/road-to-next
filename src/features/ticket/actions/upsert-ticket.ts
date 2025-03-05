"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { signInPath, ticketPath, ticketsPath } from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  ActionState,
  formErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { setCookieByKey } from "@/actions/cookies";
import { toCent } from "@/utils/currency";
import { getAuth } from "@/features/auth/queries/get-auth";
import { getAuthOrRedirect } from "@/features/auth/queries/get-auth-or-redirect";
import { isOwner } from "@/features/auth/utils/is-owner";

const upsertTicketScehma = z.object({
  title: z.string().min(1).max(191),
  content: z.string().min(1).max(1024),
  deadline: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Is required"),
  bounty: z.coerce.number().positive(),
});

export const upsertTicket = async (
  id: string | undefined,
  _actionState: ActionState,
  formData: FormData
) => {
  const { user } = await getAuthOrRedirect();

  try {
    if (id) {
      const ticket = await prisma.ticket.findUnique({
        where: {
          id,
        },
      });

      if (!ticket || !isOwner(user, ticket)) {
        return toActionState("ERROR", "Not Authorized");
      }
    }
    const data = upsertTicketScehma.parse({
      title: formData.get("title"),
      content: formData.get("content"),
      deadline: formData.get("deadline"),
      bounty: formData.get("bounty"),
    });

    const dbData = {
      ...data,
      userId: user.id,
      bounty: toCent(data.bounty),
    };

    await prisma.ticket.upsert({
      where: {
        id: id || "",
      },
      update: dbData,
      create: dbData,
    });
  } catch (error) {
    return formErrorToActionState(error, formData);
  }

  revalidatePath(ticketsPath());

  if (id) {
    await setCookieByKey("toast", "Ticket Updated");
    redirect(ticketPath(id));
  }

  return toActionState("SUCCESS", "Ticket Created");
};
