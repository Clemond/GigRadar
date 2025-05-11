import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { ITicketmasterEvent } from "../types/ITicketmasterEvent";
import { Alert } from "react-native";

export async function addConcertToFavorites(
  uid: string,
  concert: ITicketmasterEvent
) {
  const userRef = doc(db, "user_data", uid);

  try {
    await updateDoc(userRef, {
      favoriteConcerts: arrayUnion(concert)
    });
  } catch (error) {
    Alert.alert("Error adding to favorites", "please try again");
  }
}
