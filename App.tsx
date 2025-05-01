import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./navigation/navigation";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <RootStack />
      </PaperProvider>
    </NavigationContainer>
  );
}
