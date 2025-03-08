import Placeholder from "@/components/Placeholder";
import SearchInput from "@/components/SearchInput";
import SortSelect from "@/components/SortSelect";
import { getTickets } from "../queries/get-tickets";
import { SearchParams } from "../search-params";
import TicketItem from "./TicketItem";

type TicketListProps = {
  userId?: string;
  searchParams: SearchParams;
};

const TicketList = async ({ userId, searchParams }: TicketListProps) => {
  const tickets = await getTickets(userId, searchParams);
  return (
    <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
      <div className="w-full max-w-[420px] flex gap-x-2">
        <SearchInput placeholder="Search Tickets..." />

        <SortSelect
          defaultValue="newest"
          options={[
            { label: "Newest", value: "newest" },
            { label: "Bounty", value: "bounty" },
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
