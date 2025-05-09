import { ITicketmasterSearchResponse } from "../types/ITicketmasterEvent";

export const getNextPageParam = (
  lastPage: ITicketmasterSearchResponse,
  pages: ITicketmasterSearchResponse[]
): number | undefined => {
  const currentPage = lastPage.page?.number ?? pages.length - 1;
  const totalPages = lastPage.page?.totalPages ?? 0;
  return currentPage + 1 < totalPages ? currentPage + 1 : undefined;
};
