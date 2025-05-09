export const AVAILABLE_GENRES = [
  "Pop",
  "Country",
  "Electronic",
  "Rock",
  "HipHop",
  "Jazz",
  "Classical"
] as const;
export type Genre = (typeof AVAILABLE_GENRES)[number];
