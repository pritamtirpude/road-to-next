"use server";

import {
  ActionState,
  formErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { getAuthOrRedirect } from "@/features/auth/queries/get-auth-or-redirect";
import { prisma } from "@/lib/prisma";
import { ticketPath } from "@/paths";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const creatCommentSchema = z.object({
  content: z.string().min(1).max(1024),
});

export const createComment = async (
  ticketId: string,
  _actionState: ActionState,
  formData: FormData
) => {
  const { user } = await getAuthOrRedirect();

  let comment;

  try {
    const data = creatCommentSchema.parse(Object.fromEntries(formData));

    comment = await prisma.comment.create({
      data: {
        userId: user.id,
        ticketId,
        ...data,
      },
      include: {
        user: true,
      },
    });
  } catch (error) {
    return formErrorToActionState(error);
  }

  revalidatePath(ticketPath(ticketId));

  return toActionState("SUCCESS", "Comment created", undefined, {
    ...comment,
    isOwner: true,
  });
};
