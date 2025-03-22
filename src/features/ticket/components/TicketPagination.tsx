"use client";

import Pagination from "@/components/Pagination";
import { PaginatedData } from "@/types/pagination";
import { useQueryState, useQueryStates } from "nuqs";
import { useEffect, useRef } from "react";
import {
  paginationOptions,
  paginationParser,
  searchParser,
} from "../search-params";
import { TicketWithMetadata } from "../types";

type TicketPaginationProps = {
  paginatedTicketMetadata: PaginatedData<TicketWithMetadata>["metadata"];
};

const TicketPagination = ({
  paginatedTicketMetadata,
}: TicketPaginationProps) => {
  const [pagination, setPagination] = useQueryStates(
    paginationParser,
    paginationOptions
  );

  const [search] = useQueryState("search", searchParser);
  const prevSearch = useRef(search);

  useEffect(() => {
    if (search === prevSearch.current) return;
    prevSearch.current = search;

    setPagination({ ...pagination, page: 0 });

    // add nore reactive effects here once needed...
  }, [pagination, search, setPagination]);

  return (
    <Pagination
      pagination={pagination}
      onPagination={setPagination}
      paginatedMetadata={paginatedTicketMetadata}
    />
  );
};

export default TicketPagination;
