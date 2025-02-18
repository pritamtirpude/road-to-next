import CardCompact from "@/components/CardCompact";
import Heading from "@/components/Heading";
import Spinner from "@/components/Spinner";
import TicketList from "@/features/ticket/components/TicketList";
import TicketUpsertForm from "@/features/ticket/components/TicketUpsertForm";
import { Fragment, Suspense } from "react";

const TicketsPage = () => {
  return (
    <Fragment>
      <div className="flex-1 flex flex-col gap-y-8">
        <Heading title="Ticktes" description="All your tickets at one place" />
        <CardCompact
          title="Create Ticket"
          description="A new ticket will be created"
          content={<TicketUpsertForm />}
          className="w-full max-w-[420px] self-center"
        />
        <Suspense fallback={<Spinner />}>
          <TicketList />
        </Suspense>
      </div>
    </Fragment>
  );
};

export default TicketsPage;
