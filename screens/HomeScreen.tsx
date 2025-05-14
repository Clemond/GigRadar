import { View, Text, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ConcertList from "../components/layouts/ConcertList";
import BottomNavBar from "../components/nav-bar/BottomNavBar";
import { useUserStore } from "../stores/useUserStore";
import { useLocationStore } from "../stores/useLocationStore";

export default function HomeScreen() {
  const { userData } = useUserStore();
  const { city } = useLocationStore();

  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor="#061A1E" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.greetingTitle}>Hello, {userData?.firstname}</Text>
        <Text style={styles.greeting}>Good to see you again!</Text>

        <Text style={styles.sectionTitle}>Concerts in {city}</Text>
        <ConcertList />
      </SafeAreaView>
      <BottomNavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  greetingTitle: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "bold"
  },
  greeting: {
    color: "#8CAFC5",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 18,
    color: "#8CAFC5",
    marginBottom: 10,
    fontWeight: "600"
  }
});
