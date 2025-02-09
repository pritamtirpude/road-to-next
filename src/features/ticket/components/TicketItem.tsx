import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ticketEditPath, ticketPath } from "@/paths";
import {
  LucidePencil,
  LucideSquareArrowOutUpRight,
  LucideTrash,
} from "lucide-react";
import Link from "next/link";
import { TICKET_ICONS } from "../constants";
import { getTickets } from "../queries/get-tickets";
import { deleteTicket } from "../actions/delete-ticket";

type TicketItemProps = {
  ticket: Awaited<ReturnType<typeof getTickets>>[number];
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const detailButton = (
    <Button variant="outline" asChild size="icon">
      <Link href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="size-4" />
      </Link>
    </Button>
  );

  const editButton = (
    <Button variant="outline" size="icon" asChild>
      <Link prefetch href={ticketEditPath(ticket.id)}>
        <LucidePencil className="size-4" />
      </Link>
    </Button>
  );

  const deleteButton = (
    <form action={deleteTicket.bind(null, ticket.id)}>
      <Button variant="outline" size="icon">
        <LucideTrash className="size-4" />
      </Button>
    </form>
  );

  return (
    <div
      className={cn(
        "w-full flex gap-x-1",
        isDetail && "max-w-[580px]",
        !isDetail && "max-w-[420px]"
      )}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={cn(
              "whitespace-break-spaces",
              !isDetail && "line-clamp-3"
            )}
          >
            {ticket.content}
          </span>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-y-1">
        {isDetail ? (
          <>
            {editButton}
            {deleteButton}
          </>
        ) : (
          <>
            {detailButton}
            {editButton}
          </>
        )}
      </div>
    </div>
  );
};

export default TicketItem;
