import Heading from "@/components/Heading";
import Spinner from "@/components/Spinner";
import TicketList from "@/features/ticket/components/TicketList";
import { Suspense } from "react";

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Ticktes" description="All your tickets at one place" />
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default TicketsPage;
