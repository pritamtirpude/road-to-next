import { EmailVerificationEventArgs } from "@/features/auth/events/email-verification";
import { PasswordResetEvenArgs } from "@/features/password/events/event-password-reset";
import { EventSchemas, Inngest } from "inngest";

type Events = {
  "app/password.password-reset": PasswordResetEvenArgs;
  "app/auth.sign-up": EmailVerificationEventArgs;
};

export const inngest = new Inngest({
  id: "the-road-to-next",
  schemas: new EventSchemas().fromRecord<Events>(),
});
