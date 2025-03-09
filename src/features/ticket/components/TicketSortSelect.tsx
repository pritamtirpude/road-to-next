"use client";

import SortSelect, { SortSelectOption } from "@/components/SortSelect";
import { useQueryStates } from "nuqs";
import { sortOptions, sortParser } from "../search-params";

type TicketSortSelectProps = {
  options: SortSelectOption[];
};

const TicketSortSelect = ({ options }: TicketSortSelectProps) => {
  const [sort, setSort] = useQueryStates(sortParser, sortOptions);

  return <SortSelect options={options} value={sort} onChange={setSort} />;
};

export default TicketSortSelect;
