import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./navigation/navigation";
import { PaperProvider } from "react-native-paper";
import { useEffect } from "react";
import { loadUserLocation } from "./utils/loadUserLocation";

export default function App() {
  useEffect(() => {
    loadUserLocation();
  }, []);

  return (
    <NavigationContainer>
      <PaperProvider>
        <RootStack />
      </PaperProvider>
    </NavigationContainer>
  );
}
