import { IConcertCard } from "../types/IConcertCard";

export function deduplicateConcerts(concerts: IConcertCard[]): IConcertCard[] {
  return concerts.reduce<IConcertCard[]>((acc, current) => {
    const exists = acc.some(
      (c) =>
        c.artist === current.artist &&
        new Date(c.date).toDateString() ===
          new Date(current.date).toDateString()
    );
    if (!exists) acc.push(current);
    return acc;
  }, []);
}
