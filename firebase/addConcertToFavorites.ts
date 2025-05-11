import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { ITicketmasterEvent } from "../types/ITicketmasterEvent";

export async function addConcertToFavorites(
  uid: string,
  concert: ITicketmasterEvent
) {
  const userRef = doc(db, "user_data", uid);

  try {
    await updateDoc(userRef, {
      favoriteConcerts: arrayUnion(concert)
    });
    console.log("Concert added to favorites!");
  } catch (error) {
    console.error("Error adding to favorites:", error);
  }
}
