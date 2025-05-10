import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation.types";
import { Alert } from "react-native";

export function handleSignOut(
  navigation: NavigationProp<RootStackParamList>,
  clearUserData: () => void,
  clearLocation: () => void,
  resetCurrentScreen: () => void
) {
  signOut(auth)
    .then(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: "SigninScreen" }]
      });
      clearUserData();
      clearLocation();
      resetCurrentScreen();
    })
    .catch(() => {
      Alert.alert("Error", "Problem when signing out, please try again!");
    });
}
