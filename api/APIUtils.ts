import axios from "axios";
import { TicketmasterAPIConfig } from "./APIConfig";

const ticketmasterApi = axios.create({
  baseURL: TicketmasterAPIConfig.base_url
});

export async function Get<T>(relativeURL: string) {
  const res = await ticketmasterApi.get<T>(relativeURL);
  return res.data;
}
