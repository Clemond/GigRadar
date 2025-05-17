import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth } from "../firebase/firebaseConfig";
import { db } from "../firebase/firebaseConfig";
import { IRegistrationData } from "../types/IRegistrationData";
import { IUserData } from "../types/IUserData";
import { useState } from "react";

export function useSignup() {
  const [loading, setLoading] = useState(false);

  const signUp = async (
    user: IRegistrationData,
    setErrorMsg: (msg: string) => void
  ) => {
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
        surname: user.surname,
        favoriteConcerts: []
      };

      await setDoc(doc(db, "user_data", uid), userData);

      return userCredential.user;
    } catch (error: any) {
      let errorMsg = "An unexpected error occurred";

      if (error.code) {
        switch (error.code) {
          case "auth/email-already-in-use":
            errorMsg = "Email is already in use.";
            break;
          case "auth/invalid-email":
            errorMsg = "Invalid email address.";
            break;
          case "auth/weak-password":
            errorMsg = "Password should be at least 6 characters.";
            break;
          default:
            errorMsg = "Something went wrong. Please try again.";
        }
      }

      setErrorMsg(errorMsg);
      console.log(error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { signUp, loading };
}
