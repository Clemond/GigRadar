import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation.types";
import { Alert } from "react-native";

export function handleSignOut(navigation: NavigationProp<RootStackParamList>) {
  signOut(auth)
    .then(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: "SigninScreen" }]
      });
    })
    .catch(() => {
      Alert.alert("Error", "Problem when signing out, please try again!");
    });
}
