import axios from "axios";
import { APIConfig } from "./APIConfig";

const ticketmasterApi = axios.create({
  baseURL: APIConfig.base_url
});

export async function Get<T>(relativeURL: string) {
  return await ticketmasterApi.get<T>(relativeURL).then((res) => res);
}
