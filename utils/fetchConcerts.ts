import {
  searchConcertsByCity,
  searchConcertsByCountry
} from "../api/APIMethods";
import { AVAILABLE_GENRES, Genre } from "../constants/genres";

interface FetchConcertsParams {
  city?: string | null;
  countryCode?: string | null;
  pageParam: number;
  isNearbySelected: boolean;
  selectedFilters: string[];
}

export const fetchConcerts = async ({
  city,
  countryCode,
  pageParam,
  isNearbySelected,
  selectedFilters
}: FetchConcertsParams) => {
  const genreFilters = selectedFilters.filter((f): f is Genre =>
    AVAILABLE_GENRES.includes(f as Genre)
  );

  const isTodaySelected = selectedFilters.includes("Today");

  if (isNearbySelected) {
    if (!city) throw new Error("Missing city");

    return await searchConcertsByCity(
      city,
      10,
      pageParam,
      genreFilters,
      isTodaySelected
    );
  }

  if (!countryCode) throw new Error("Missing country code");

  return await searchConcertsByCountry(
    countryCode,
    pageParam,
    10,
    genreFilters,
    isTodaySelected
  );
};
