import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export async function fetchUserData(uid: string) {
  try {
    const docRef = doc(db, "user_data", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch {
    return null;
  }
}
