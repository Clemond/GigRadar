import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { ITicketmasterEvent } from "../types/ITicketmasterEvent";

export async function removeConcertFromFavorites(
  uid: string,
  concert: ITicketmasterEvent
) {
  const userRef = doc(db, "user_data", uid);
  await updateDoc(userRef, {
    favoriteConcerts: arrayRemove(concert)
  });
}
