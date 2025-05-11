import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { doc, onSnapshot } from "firebase/firestore";
import { ITicketmasterEvent } from "../types/ITicketmasterEvent";

export function useFavorites(uid: string | undefined) {
  const [favorites, setFavorites] = useState<ITicketmasterEvent[]>([]);

  useEffect(() => {
    if (!uid) return;

    const userRef = doc(db, "user_data", uid);
    const stopListening = onSnapshot(userRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setFavorites(data.favoriteConcerts ?? []);
      }
    });

    return () => stopListening();
  }, [uid]);

  return favorites;
}
