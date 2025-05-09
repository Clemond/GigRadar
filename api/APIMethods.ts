// api/APIMethods.ts
import { APIConfig } from "./APIConfig";
import { Get } from "./APIUtils";
import { ITicketmasterSearchResponse } from "../types/ITicketmasterEvent";
import { IGenreName } from "../types/IGenreName";
import { getTodayDateRange } from "../utils/getTodaysDateRange";
import { buildGenreParam, buildPageParam } from "../utils/buildQueryParams";

async function searchConcertsBase({
  locationParam,
  size,
  page,
  genreNames,
  onlyToday
}: {
  locationParam: string;
  size: number;
  page?: number;
  genreNames?: IGenreName[];
  onlyToday?: boolean;
}): Promise<ITicketmasterSearchResponse> {
  const query = [
    `${APIConfig.searchEvents}${APIConfig.key}`,
    "&classificationName=music",
    locationParam,
    `&size=${size}`,
    buildPageParam(page),
    buildGenreParam(genreNames),
    "&sort=date,asc",
    getTodayDateRange(!!onlyToday)
  ].join("");

  return await Get<ITicketmasterSearchResponse>(query).then(({ data }) => data);
}

export function searchConcertsByCity(
  city: string,
  size: number,
  page?: number,
  genreNames?: IGenreName[],
  onlyToday: boolean = false
) {
  return searchConcertsBase({
    locationParam: `&city=${city}`,
    size,
    page,
    genreNames,
    onlyToday
  });
}

export function searchConcertsByCountry(
  countryCode: string,
  page: number,
  size: number,
  genreNames?: IGenreName[],
  onlyToday: boolean = false
) {
  return searchConcertsBase({
    locationParam: `&countryCode=${countryCode}`,
    size,
    page,
    genreNames,
    onlyToday
  });
}
