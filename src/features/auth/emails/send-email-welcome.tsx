import EmailWelcome from "@/emails/welcome/email-welcome";
import { resend } from "@/lib/resend";

export const sendEmailWelcome = async (
  username: string,
  email: string,
  url: string
) => {
  return await resend.emails.send({
    from: "no-reply@app.pritam-nextjs.com",
    to: email,
    subject: "Welcome Email from TicketBounty",
    react: <EmailWelcome toName={username} url={url} />,
  });
};
