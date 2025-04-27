import { inngest } from "@/lib/inngest";
import { prisma } from "@/lib/prisma";
import { sendEmailWelcome } from "../emails/send-email-welcome";

export const emailWelcomeEvent = inngest.createFunction(
  { id: "email-welcome" },
  { event: "app/auth.sign-up" },
  async ({ event }) => {
    const { userId } = event.data;

    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id: userId,
      },
    });

    const url = "https://www.pritam-nextjs.com/";
    const result = await sendEmailWelcome(user.username, user.email, url);

    if (result.error) {
      throw new Error(`${result.error.name}: ${result.error.message}`);
    }

    return { event, body: result };
  }
);
