import { APIConfig } from "./APIConfig";
import { Get } from "./APIUtils";
import { ITicketmasterSearchResponse } from "../types/ITicketmasterEvent";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function searchConcertsNearYou(
  city: string,
  size: number
): Promise<ITicketmasterSearchResponse> {
  return await Get<ITicketmasterSearchResponse>(
    `${APIConfig.searchEvents}${APIConfig.key}&classificationName=music&city=${city}&size=${size}`
  ).then(({ data }) => data);
}

// ! FIrebase

export async function fetchUserData(uid: string) {
  try {
    const docRef = doc(db, "user_data", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}
