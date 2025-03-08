"use client";

import Placeholder from "@/components/Placeholder";

function Error({ error }: { error: Error }) {
  return <Placeholder label={error?.message || "Something went wrong"} />;
}

export default Error;
