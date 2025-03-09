"use client";

import SearchInput from "@/components/SearchInput";
import { useQueryState } from "nuqs";
import { searchParser } from "../search-params";

type TicketSearcgInputProps = {
  placeholder: string;
};

const TicketSearchInput = ({ placeholder }: TicketSearcgInputProps) => {
  const [search, setSearch] = useQueryState("search", searchParser);
  return (
    <SearchInput
      value={search}
      onChange={setSearch}
      placeholder={placeholder}
    />
  );
};

export default TicketSearchInput;
