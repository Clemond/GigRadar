import { TicketmasterAPIConfig } from "./APIConfig";
import { Get } from "./APIUtils";
import { ITicketmasterEvent } from "../types/ITicketmasterEvent";

export async function searchConcertsNearYou(
  city: string,
  size: number = 10 // ! this is how many concerts gets fetched. Change this later on to be done through useQuery
): Promise<ITicketmasterEvent[]> {
  const query = `/events.json?apikey=${TicketmasterAPIConfig.key}&classificationName=music&city=${city}&size=${size}`;
  const response = await Get<{ _embedded: { events: ITicketmasterEvent[] } }>(
    query
  );
  return response._embedded?.events || [];
}
