import { View, Text, StyleSheet, StatusBar, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ConcertList from "../components/homeScreen/ConcertList";
import BottomNavBar from "../components/nav-bar/BottomNavBar";
import { useEffect, useState } from "react";
import { searchConcertsNearYou } from "../api/APIMethods";
import { mapToConcertCard } from "../utils/eventMapper";
import { IConcertCard } from "../types/IConcertCard";
import { useUserStore } from "../stores/useUserStore";
import { useLocationStore } from "../stores/useLocationStore";
import SearchBar from "../components/search-bar/SearchBar";

export default function HomeScreen() {
  const [nearEventList, setNearEventList] = useState<IConcertCard[]>([]);
  const { userData } = useUserStore();
  const { location, city } = useLocationStore();

  useEffect(() => {
    async function fetchEvents() {
      if (!city) return;

      try {
        const events = await searchConcertsNearYou(city, 10);
        const mappedEvents =
          events._embedded?.events.map(mapToConcertCard) ?? [];

        mappedEvents.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );

        setNearEventList(mappedEvents);
      } catch {
        Alert.alert(
          "Error",
          "Failed to fetch concerts. Please try again later.",
          [{ text: "OK" }]
        );
      }
    }
    fetchEvents();
  }, [location]);

  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor="#061A1E" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.greetingTitle}>Hello, {userData?.firstname}</Text>
        <Text style={styles.greeting}>Good to see you again!</Text>
        <SearchBar />
        <Text style={styles.sectionTitle}>Concerts near {city}</Text>
        <ConcertList concertList={nearEventList} />
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
