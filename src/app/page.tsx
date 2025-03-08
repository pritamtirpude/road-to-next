import Heading from "@/components/Heading";
import Spinner from "@/components/Spinner";
import TicketList from "@/features/ticket/components/TicketList";
import { SearchParams } from "@/features/ticket/search-params";
import { Suspense } from "react";

type HomePageProps = {
  searchParams: Promise<SearchParams>;
};

const HomePage = async ({ searchParams }: HomePageProps) => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="All Tickets"
        description="Tickets by everyone at one place"
      />
      <div className="flex-1 flex flex-col items-center">
        <Suspense fallback={<Spinner />}>
          <TicketList searchParams={await searchParams} />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
