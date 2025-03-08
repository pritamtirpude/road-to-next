import Placeholder from "@/components/Placeholder";
import { Button } from "@/components/ui/button";
import { ticketsPath } from "@/paths";
import Link from "next/link";

function NotFound() {
  return (
    <Placeholder
      label="No Tickets Found"
      button={
        <Button asChild variant="outline">
          <Link href={ticketsPath()}>Go to Tickets</Link>
        </Button>
      }
    />
  );
}

export default NotFound;
