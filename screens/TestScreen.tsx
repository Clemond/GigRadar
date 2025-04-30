import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../types/navigation.types";

export default function TestScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the test screen</Text>
      <Button
        onPress={() => navigation.navigate("SigninScreen")}
        title="back"
      />
    </View>
  );
}
