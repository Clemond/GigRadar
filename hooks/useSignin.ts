import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export function useSignin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Successfully logged in" + email);
      setError(false);
      return userCredentials.user;
    } catch (error) {
      console.log("Login failed" + error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { signIn, loading, error };
}
