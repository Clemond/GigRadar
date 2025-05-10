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

export function buildKeywordParam(keyword?: string) {
  return keyword !== undefined ? `&keyword=${keyword}` : "";
}

export function buildSizeParam(size: number) {
  return `&size=${size}`;
}
