import { getAuth } from "firebase/auth";
import { fetchUserData } from "../firebase/firebaseFirestore";
import { IUserData } from "../types/IUserData";
import { useUserStore } from "../stores/useUserStore";

export async function setUserDataFromFirebase() {
  const uid = getAuth().currentUser?.uid;
  if (uid) {
    const userData = await fetchUserData(uid);
    if (userData) {
      useUserStore.getState().setUserData(userData as IUserData);
    }
  }
}
