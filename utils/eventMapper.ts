import { ITicketmasterEvent } from "../types/ITicketmasterEvent";

export function mapToConcertCard(event: ITicketmasterEvent) {
  return {
    id: event.id,
    artist: event._embedded?.attractions?.[0]?.name ?? event.name,
    city: event._embedded.venues[0].city.name,
    date: event.dates.start.localDate,
    img: { uri: event.images[0]?.url }
  };
}
