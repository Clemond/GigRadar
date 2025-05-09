import { genreIdMap } from "../constants/genreIdMap";
import { IGenreName } from "../types/IGenreName";

export function buildGenreParam(genreNames?: IGenreName[]) {
  if (!genreNames || genreNames.length === 0) return "";
  return `&classificationId=${genreNames
    .map((name) => genreIdMap[name])
    .join(",")}`;
}

export function buildPageParam(page?: number) {
  return page !== undefined ? `&page=${page}` : "";
}
