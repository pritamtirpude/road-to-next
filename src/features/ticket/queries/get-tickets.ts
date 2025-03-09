import { prisma } from "@/lib/prisma";
import { ParseSearchParams } from "../search-params";

export const getTickets = async (
  userId: string | undefined,
  searchParams: ParseSearchParams
) => {
  return await prisma.ticket.findMany({
    where: {
      userId,
      title: {
        contains: searchParams.search,
        mode: "insensitive",
      },
    },
    orderBy: {
      [searchParams.sortKey]: searchParams.sortValue,
    },
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });
};
