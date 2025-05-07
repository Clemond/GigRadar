import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./navigation/navigation";
import { PaperProvider } from "react-native-paper";
import { useEffect } from "react";
import { loadUserLocation } from "./utils/loadUserLocation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  useEffect(() => {
    loadUserLocation();
  }, []);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <PaperProvider>
          <RootStack />
        </PaperProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
