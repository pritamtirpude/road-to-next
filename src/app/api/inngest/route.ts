import { emailVeificationEvent } from "@/features/auth/events/email-verification";
import { emailWelcomeEvent } from "@/features/auth/events/email-welcome";
import { passwordResetEvent } from "@/features/password/events/event-password-reset";
import { inngest } from "@/lib/inngest";
import { serve } from "inngest/next";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [passwordResetEvent, emailVeificationEvent, emailWelcomeEvent],
});
