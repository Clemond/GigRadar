import { APIConfig } from "./APIConfig";
import { Get } from "./APIUtils";
import { ITicketmasterSearchResponse } from "../types/ITicketmasterEvent";
import { genreIdMap } from "../constants/genreIdMap";
import { IGenreName } from "../types/IGenreName";

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
  size: number,
  genreName?: IGenreName
): Promise<ITicketmasterSearchResponse> {
  const genreIdParam =
    genreName !== undefined ? `&classificationId=${genreIdMap[genreName]}` : "";

  return await Get<ITicketmasterSearchResponse>(
    `${APIConfig.searchEvents}${APIConfig.key}&classificationName=music&countryCode=${countryCode}&size=${size}&page=${page}${genreIdParam}`
  ).then(({ data }) => data);
}
