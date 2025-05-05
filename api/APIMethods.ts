import { APIConfig } from "./APIConfig";
import { Get } from "./APIUtils";
import { ITicketmasterSearchResponse } from "../types/ITicketmasterEvent";

export async function searchConcertsNearYou(
  city: string,
  size: number
): Promise<ITicketmasterSearchResponse> {
  return await Get<ITicketmasterSearchResponse>(
    `${APIConfig.searchEvents}${APIConfig.key}&classificationName=music&city=${city}&size=${size}`
  ).then(({ data }) => data);
}
