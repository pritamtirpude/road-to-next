import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

type EmailWelcomeProps = {
  toName: string;
  url: string;
};

const EmailWelcome = ({ toName, url }: EmailWelcomeProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="font-sans m-8 text-center">
          <Container>
            <Section>
              <Text>Hi, {toName}</Text>
              <Text>
                Welcome to TicketBounty, raise tickets with bounty on it.
              </Text>
            </Section>
            <Section>
              <Button
                href={url}
                className="bg-black text-white p-2 m-2 rounded"
              >
                Get Started
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

EmailWelcome.PreviewProps = {
  toName: "Pritam Tirpude",
  url: "https://www.pritam-nextjs.com/",
};

export default EmailWelcome;
