import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation.types";
import { handleSignOut } from "../utils/handleSignout";

export function getAccountOptions(
  navigation: NavigationProp<RootStackParamList>,
  clearUserData: () => void,
  clearLocation: () => void,
  resetCurrentScreen: () => void
): {
  icon: string;
  label: string;
  onPress: () => void;
}[] {
  return [
    {
      icon: "account-edit",
      label: "Edit Profile",
      onPress: () => {
        navigation.navigate("EditAccountScreen");
      }
    },
    {
      icon: "calendar-check",
      label: "My Saved Concerts",
      onPress: () => {
        navigation.navigate("FavoriteScreen");
      }
    },
    {
      icon: "logout",
      label: "Log Out",
      onPress: () =>
        handleSignOut(
          navigation,
          clearUserData,
          clearLocation,
          resetCurrentScreen
        )
    }
  ];
}
