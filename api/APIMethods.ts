import { APIConfig } from "./APIConfig";
import { Get } from "./APIUtils";
import { ITicketmasterSearchResponse } from "../types/ITicketmasterEvent";
import { IGenreName } from "../types/IGenreName";
import { getTodayDateRange } from "../utils/getTodaysDateRange";
import {
  buildGenreParam,
  buildKeywordParam,
  buildPageParam,
  buildSizeParam
} from "../utils/buildQueryParams";

async function searchConcertsBase({
  locationParam,
  size,
  page,
  genreNames,
  isOnlyToday,
  keyword
}: {
  locationParam: string;
  size: number;
  page?: number;
  genreNames?: IGenreName[];
  isOnlyToday: boolean;
  keyword?: string;
}): Promise<ITicketmasterSearchResponse> {
  const query = [
    APIConfig.events.search,
    APIConfig.key,
    APIConfig.eventType.music,
    APIConfig.fetchOrder.ascending,
    locationParam,
    buildSizeParam(size),
    buildPageParam(page),
    buildGenreParam(genreNames),
    buildKeywordParam(keyword),
    getTodayDateRange(isOnlyToday)
  ].join("");

  return await Get<ITicketmasterSearchResponse>(query).then(({ data }) => data);
}

export function searchConcertsByCity(
  city: string,
  size: number,
  page?: number,
  genreNames?: IGenreName[],
  isOnlyToday: boolean = false,
  keyword?: string
) {
  return searchConcertsBase({
    locationParam: `&city=${city}`,
    size,
    page,
    genreNames,
    isOnlyToday,
    keyword
  });
}

export function searchConcertsByCountry(
  countryCode: string,
  page: number,
  size: number,
  genreNames?: IGenreName[],
  isOnlyToday: boolean = false,
  keyword?: string
) {
  return searchConcertsBase({
    locationParam: `&countryCode=${countryCode}`,
    size,
    page,
    genreNames,
    isOnlyToday,
    keyword
  });
}
