import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Keyboard } from "react-native";

export function useSignin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signIn = async (email: string, password: string) => {
    Keyboard.dismiss();
    setLoading(true);
    setError(null);

    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Successfully logged in" + email);
      return userCredentials.user;
    } catch (error) {
      console.log("Login failed" + error);
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return { signIn, loading, error };
}
