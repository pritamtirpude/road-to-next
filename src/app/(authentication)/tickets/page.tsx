import CardCompact from "@/components/CardCompact";
import Heading from "@/components/Heading";
import Spinner from "@/components/Spinner";
import { getAuth } from "@/features/auth/queries/get-auth";
import TicketList from "@/features/ticket/components/TicketList";
import TicketUpsertForm from "@/features/ticket/components/TicketUpsertForm";
import { searchParamsCache } from "@/features/ticket/search-params";
import { SearchParams } from "nuqs/server";
import { Fragment, Suspense } from "react";

type TicketsPageProps = {
  searchParams: Promise<SearchParams>;
};

const TicketsPage = async ({ searchParams }: TicketsPageProps) => {
  const { user } = await getAuth();
  return (
    <Fragment>
      <div className="flex-1 flex flex-col gap-y-8">
        <Heading
          title="My Ticktes"
          description="All your tickets at one place"
        />
        <CardCompact
          title="Create Ticket"
          description="A new ticket will be created"
          content={<TicketUpsertForm />}
          className="w-full max-w-[420px] self-center"
        />
        <Suspense fallback={<Spinner />}>
          <TicketList
            userId={user?.id}
            searchParams={await searchParamsCache.parse(searchParams)}
          />
        </Suspense>
      </div>
    </Fragment>
  );
};

export default TicketsPage;
