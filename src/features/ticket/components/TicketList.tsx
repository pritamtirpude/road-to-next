import Placeholder from "@/components/Placeholder";
import { getTickets } from "../queries/get-tickets";
import { ParseSearchParams } from "../search-params";
import TicketItem from "./TicketItem";
import TicketSearchInput from "./TicketSearchInput";
import TicketSortSelect from "./TicketSortSelect";

type TicketListProps = {
  userId?: string;
  searchParams: ParseSearchParams;
};

const TicketList = async ({ userId, searchParams }: TicketListProps) => {
  const tickets = await getTickets(userId, searchParams);
  return (
    <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
      <div className="w-full max-w-[420px] flex gap-x-2">
        <TicketSearchInput placeholder="Search Tickets..." />

        <TicketSortSelect
          options={[
            {
              sortKey: "createdAt",
              sortValue: "desc",
              label: "Newest",
            },
            {
              sortKey: "createdAt",
              sortValue: "asc",
              label: "Oldest",
            },
            {
              sortKey: "bounty",
              sortValue: "desc",
              label: "Bounty",
            },
          ]}
        />
      </div>
      {tickets.length ? (
        tickets?.map((ticket) => (
          <TicketItem key={ticket?.id} ticket={ticket} />
        ))
      ) : (
        <Placeholder label="No tickets found" />
      )}
    </div>
  );
};

export default TicketList;
