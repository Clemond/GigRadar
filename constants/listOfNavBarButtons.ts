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
    screen: "heart",
    navigationName: "HomeScreen" // Change this later when the screen in created
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
