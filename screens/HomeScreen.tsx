import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Alert
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ConcertList from "../components/homeScreen/ConcertList";
import BottomNavBar from "../components/nav-bar/BottomNavBar";
import { useEffect, useState } from "react";
import { searchConcertsNearYou } from "../api/APIMethods";
import { mapToConcertCard } from "../utils/eventMapper";
import { IConcertCard } from "../types/IConcertCard";
import { useUserLocation } from "../hooks/useUserLocation";
import * as Location from "expo-location";

export default function HomeScreen() {
  const [nearEventList, setNearEventList] = useState<IConcertCard[]>([]);
  const { location } = useUserLocation();
  const [currentCity, setCurrentCity] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        let city = "stockholm";

        if (location) {
          const reverseGeocoded = await Location.reverseGeocodeAsync({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
          });

          if (reverseGeocoded.length > 0 && reverseGeocoded[0].city) {
            city = reverseGeocoded[0].city;
          }
        }

        setCurrentCity(city);

        const events = await searchConcertsNearYou(city, 10);
        setNearEventList(events._embedded?.events.map(mapToConcertCard) ?? []);
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
        <Text style={styles.greetingTitle}>Hello, Username</Text>
        <Text style={styles.greeting}>Good to see you again!</Text>

        <TextInput
          placeholder="Search artist, city, or date..."
          placeholderTextColor="#8CAFC5"
          style={styles.searchInput}
        />

        <Text style={styles.sectionTitle}>Concerts near {currentCity}</Text>

        <ConcertList concertList={nearEventList} />
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
