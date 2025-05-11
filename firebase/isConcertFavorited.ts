import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { ITicketmasterEvent } from "../types/ITicketmasterEvent";

export async function isConcertFavorited(uid: string, concertId: string) {
  const userRef = doc(db, "user_data", uid);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) return false;

  const favorites = userSnap.data().favoriteConcerts || [];
  return favorites.some((fav: ITicketmasterEvent) => fav.id === concertId);
}
