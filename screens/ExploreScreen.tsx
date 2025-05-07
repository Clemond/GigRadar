import { View, Text, StyleSheet } from "react-native";
import BottomNavBar from "../components/nav-bar/BottomNavBar";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text>Explore screen</Text>
      <BottomNavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  }
});
