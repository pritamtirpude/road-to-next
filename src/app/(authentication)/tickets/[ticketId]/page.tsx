import Breadcrumbs from "@/components/Breadcrumbs";
import { Separator } from "@/components/ui/separator";
import TicketItem from "@/features/ticket/components/TicketItem";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { homePath } from "@/paths";
import { notFound } from "next/navigation";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Breadcrumbs
        breadcrumbs={[
          { title: "Tickets", href: homePath() },
          { title: ticket.title },
        ]}
      />

      <Separator />

      <div className="flex justify-center animate-fade-in-from-top">
        <TicketItem ticket={ticket} isDetail />
      </div>
    </div>
  );
};

export default TicketPage;
