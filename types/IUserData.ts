import { ITicketmasterEvent } from "./ITicketmasterEvent";

export interface IUserData {
  email: string;
  firstname: string;
  surname: string;
  favoriteConcerts: ITicketmasterEvent[];
}
