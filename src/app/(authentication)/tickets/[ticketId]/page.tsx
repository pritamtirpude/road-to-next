import Breadcrumbs from "@/components/Breadcrumbs";
import { Separator } from "@/components/ui/separator";
import Comments from "@/features/comment/components/Comments";
import { getComments } from "@/features/comment/queries/get-comments";
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
  const ticketPromise = getTicket(ticketId);
  const commentsPromise = getComments(ticketId);

  const [ticket, comments] = await Promise.all([
    ticketPromise,
    commentsPromise,
  ]);

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
        <TicketItem
          ticket={ticket}
          isDetail
          comments={<Comments ticketId={ticketId} comments={comments} />}
        />
      </div>
    </div>
  );
};

export default TicketPage;
