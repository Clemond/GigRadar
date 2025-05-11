import { IConcertCard } from "./IConcertCard";

export interface IUserData {
  email: string;
  firstname: string;
  surname: string;
  favoriteConcerts: IConcertCard[];
}
