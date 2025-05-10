import { APIConfig } from "./APIConfig";
import { Get } from "./APIUtils";
import { ITicketmasterSearchResponse } from "../types/ITicketmasterEvent";
import { IGenreName } from "../types/IGenreName";
import { getTodayDateRange } from "../utils/getTodaysDateRange";
import {
  buildGenreParam,
  buildKeywordParam,
  buildPageParam
} from "../utils/buildQueryParams";

async function searchConcertsBase({
  locationParam,
  size,
  page,
  genreNames,
  onlyToday,
  keyword
}: {
  locationParam: string;
  size: number;
  page?: number;
  genreNames?: IGenreName[];
  onlyToday?: boolean;
  keyword?: string;
}): Promise<ITicketmasterSearchResponse> {
  const query = [
    `${APIConfig.searchEvents}${APIConfig.key}`,
    "&classificationName=music", // ! move this to default
    locationParam,
    `&size=${size}`,
    buildPageParam(page),
    buildGenreParam(genreNames),
    buildKeywordParam(keyword),
    "&sort=date,asc", // ! move this to default
    getTodayDateRange(!!onlyToday)
  ].join("");

  return await Get<ITicketmasterSearchResponse>(query).then(({ data }) => data);
}

export function searchConcertsByCity(
  city: string,
  size: number,
  page?: number,
  genreNames?: IGenreName[],
  onlyToday: boolean = false,
  keyword?: string
) {
  return searchConcertsBase({
    locationParam: `&city=${city}`,
    size,
    page,
    genreNames,
    onlyToday,
    keyword
  });
}

export function searchConcertsByCountry(
  countryCode: string,
  page: number,
  size: number,
  genreNames?: IGenreName[],
  onlyToday: boolean = false,
  keyword?: string
) {
  return searchConcertsBase({
    locationParam: `&countryCode=${countryCode}`,
    size,
    page,
    genreNames,
    onlyToday,
    keyword
  });
}
