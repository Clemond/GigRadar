import { RootStackParamList } from "../types/navigation.types";

export const listOfNavBarButtons: {
  icon: string;
  screen: string;
  navigationName: keyof RootStackParamList;
}[] = [
  {
    icon: "home-outline",
    screen: "home",
    navigationName: "HomeScreen"
  },
  {
    icon: "heart-outline",
    screen: "favorite",
    navigationName: "FavoriteScreen"
  },
  {
    icon: "magnify",
    screen: "explore",
    navigationName: "ExploreScreen"
  },
  {
    icon: "account-outline",
    screen: "account",
    navigationName: "AccountScreen"
  }
];
