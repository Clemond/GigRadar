import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth } from "../firebase/firebaseConfig";
import { db } from "../firebase/firebaseConfig";
import { IUser } from "../types/IUser";
import { IUserData } from "../types/IUserData";
import { useState } from "react";

export function useSignup() {
  const [loading, setLoading] = useState(false);

  const signUp = async (user: IUser) => {
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      const uid = userCredential.user.uid;

      const userData: IUserData = {
        email: user.email,
        firstname: user.firstname,
        surname: user.surname
      };

      await setDoc(doc(db, "user_data", uid), userData);

      return userCredential.user;
    } catch (error) {
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { signUp };
}
