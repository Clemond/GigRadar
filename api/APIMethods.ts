import { APIConfig } from "./APIConfig";
import { Get } from "./APIUtils";
import { ITicketmasterSearchResponse } from "../types/ITicketmasterEvent";
import { genreIdMap } from "../constants/genreIdMap";
import { IGenreName } from "../types/IGenreName";
import { getTodayDateRange } from "../utils/getTodaysDateRange";

export async function searchConcertsByCity(
  city: string,
  size: number,
  page?: number,
  genreNames?: IGenreName[],
  onlyToday: boolean = false
): Promise<ITicketmasterSearchResponse> {
  const pageParam = page !== undefined ? `&page=${page}` : "";

  const genreIdParam =
    genreNames && genreNames.length > 0
      ? `&classificationId=${genreNames
          .map((name) => genreIdMap[name])
          .join(",")}`
      : "";

  const dateRangeParam = getTodayDateRange(onlyToday);

  return await Get<ITicketmasterSearchResponse>(
    `${APIConfig.searchEvents}${APIConfig.key}&classificationName=music&city=${city}&size=${size}${pageParam}${genreIdParam}&sort=date,asc${dateRangeParam}`
  ).then(({ data }) => data);
}

export async function searchConcertsByCountry(
  countryCode: string,
  page: number,
  size: number,
  genreNames?: IGenreName[],
  onlyToday: boolean = false
): Promise<ITicketmasterSearchResponse> {
  const genreIdParam =
    genreNames && genreNames.length > 0
      ? `&classificationId=${genreNames
          .map((name) => genreIdMap[name])
          .join(",")}`
      : "";

  const dateRangeParam = getTodayDateRange(onlyToday);

  return await Get<ITicketmasterSearchResponse>(
    `${APIConfig.searchEvents}${APIConfig.key}&classificationName=music&countryCode=${countryCode}&size=${size}&page=${page}${genreIdParam}&sort=date,asc${dateRangeParam}`
  ).then(({ data }) => data);
}
