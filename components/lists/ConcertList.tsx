import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Alert
} from "react-native";
import { IConcertCard } from "../../types/IConcertCard";
import UseTypeNavigation from "../../hooks/useTypeNavigation";
import { UseCurrentScreenStore } from "../../stores/useCurrentScreenStore";
import ConcertCard from "../cards/ConcertCard";
import { useEffect, useState } from "react";
import { useLocationStore } from "../../stores/useLocationStore";
import { searchConcertsNearYou } from "../../api/APIMethods";
import { mapToConcertCard } from "../../utils/eventMapper";

export default function ConcertList() {
  const [concertList, setConcertList] = useState<IConcertCard[]>([]);
  const navigation = UseTypeNavigation();
  const { setCurrentScreen } = UseCurrentScreenStore();
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

        setConcertList(mappedEvents);
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
    <View style={styles.recommendedCard}>
      <ScrollView horizontal={true}>
        {concertList.map((event) => (
          <ConcertCard key={event.id} concert={event} />
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.exploreButton}
        onPress={() => {
          navigation.navigate("ExploreScreen");
          setCurrentScreen("explore");
        }}
      >
        <Text style={styles.exploreButtonText}>Explore All Events</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  recommendedCard: {
    borderWidth: 1,
    borderColor: "#8CAFC5",
    borderRadius: 10
  },
  exploreButton: {
    backgroundColor: "#F77E32",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    margin: 5
  },
  exploreButtonText: {
    color: "#061A1E",
    fontWeight: "bold"
  }
});
