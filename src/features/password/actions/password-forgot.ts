"use server";

import {
  ActionState,
  formErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { sendEmailPasswordReset } from "../emails/send-email-password-reset";
import { generatePasswordResetLink } from "../utils/generate-reset-password-link";

const passwordForgotSchema = z.object({
  email: z.string().min(1, { message: "Is required" }).max(191).email(),
});

export const passwordForgot = async (
  _actionState: ActionState,
  formData: FormData
) => {
  try {
    const { email } = passwordForgotSchema.parse({
      email: formData.get("email"),
    });

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return toActionState("ERROR", "Incorrect email", formData);
    }

    const passwordResetLink = await generatePasswordResetLink(user.id);

    await sendEmailPasswordReset(user.username, user.email, passwordResetLink);
  } catch (error) {
    return formErrorToActionState(error, formData);
  }

  return toActionState("SUCCESS", "Check your email for a reset link");
};
