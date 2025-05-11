import { ITicketmasterEvent } from "../types/ITicketmasterEvent";

export function deduplicateConcerts(
  concerts: ITicketmasterEvent[]
): ITicketmasterEvent[] {
  return concerts.reduce<ITicketmasterEvent[]>((acc, current) => {
    const exists = acc.some(
      (c) =>
        c.name === current.name &&
        new Date(c.dates.start.localDate).toDateString() ===
          new Date(current.dates.start.localDate).toDateString()
    );
    if (!exists) acc.push(current);
    return acc;
  }, []);
}
