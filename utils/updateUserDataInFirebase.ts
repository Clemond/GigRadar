import { doc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase/firebaseConfig";

export async function updateUserDataInFirebase(data: {
  firstname: string;
  surname: string;
}) {
  const user = getAuth().currentUser;
  if (!user) throw new Error("No user logged in");

  const userRef = doc(db, "users", user.uid);
  await updateDoc(userRef, data);
}
