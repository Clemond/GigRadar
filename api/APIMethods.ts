import { APIConfig } from "./APIConfig";
import { Get } from "./APIUtils";
import { ITicketmasterSearchResponse } from "../types/ITicketmasterEvent";

export async function searchConcertsByCity(
  city: string,
  size: number,
  page?: number
): Promise<ITicketmasterSearchResponse> {
  const pageParam = page !== undefined ? `&page=${page}` : "";

  return await Get<ITicketmasterSearchResponse>(
    `${APIConfig.searchEvents}${APIConfig.key}&classificationName=music&city=${city}&size=${size}${pageParam}`
  ).then(({ data }) => data);
}

export async function searchConcertsByCountry(
  countryCode: string,
  page: number,
  size: number
): Promise<ITicketmasterSearchResponse> {
  return await Get<ITicketmasterSearchResponse>(
    `${APIConfig.searchEvents}${APIConfig.key}&classificationName=music&countryCode=${countryCode}&size=${size}&page=${page}`
  ).then(({ data }) => data);
}
