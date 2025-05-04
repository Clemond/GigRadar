import { View, Text, StyleSheet, TextInput, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ConcertList from "../components/homeScreen/ConcertList";
import BottomNavBar from "../components/nav-bar/BottomNavBar";
import { useEffect, useState } from "react";
import { searchConcertsNearYou } from "../api/APIMethods";
import { mapToConcertCard } from "../utils/eventMapper";
import { IConcertCard } from "../types/IConcertCard";

export default function HomeScreen() {
  const [recommendedEvents, setRecommendedEvents] = useState<IConcertCard[]>(
    []
  );

  useEffect(() => {
    async function fetchEvents() {
      try {
        const events = await searchConcertsNearYou("Stockholm");
        setRecommendedEvents(events.map(mapToConcertCard));
      } catch (error) {
        console.error("Failed to fetch concerts", error);
      }
    }

    fetchEvents();
  }, []);

  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor="#061A1E" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.greetingTitle}>Hello, Username</Text>
        <Text style={styles.greeting}>Good to see you again!</Text>

        <TextInput
          placeholder="Search artist, city, or date..."
          placeholderTextColor="#8CAFC5"
          style={styles.searchInput}
        />

        <Text style={styles.sectionTitle}>Artist in town</Text>

        <ConcertList concertList={recommendedEvents} />
      </SafeAreaView>
      <BottomNavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#061A1E"
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
  searchInput: {
    backgroundColor: "#13353C",
    borderRadius: 10,
    padding: 14,
    color: "#FFFFFF",
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 18,
    color: "#8CAFC5",
    marginBottom: 10,
    fontWeight: "600"
  }
});
