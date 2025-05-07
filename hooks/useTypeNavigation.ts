import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation.types";

export default function UseTypeNavigation() {
  return useNavigation<NavigationProp<RootStackParamList>>();
}
