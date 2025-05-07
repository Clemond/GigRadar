import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from "react-native";
import UseTypeNavigation from "../../hooks/useTypeNavigation";
import { UseCurrentScreenStore } from "../../stores/useCurrentScreenStore";
import ConcertCard from "../cards/ConcertCard";
import { useLocationStore } from "../../stores/useLocationStore";
import { searchConcertsNearYou } from "../../api/APIMethods";
import { mapToConcertCard } from "../../utils/eventMapper";
import { useQuery } from "@tanstack/react-query";

export default function ConcertList() {
  const navigation = UseTypeNavigation();
  const { setCurrentScreen } = UseCurrentScreenStore();
  const { city } = useLocationStore();

  const {
    data: concertList,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["concerts", city],
    queryFn: async () => {
      if (!city) return;
      const events = await searchConcertsNearYou(city, 10);
      const mapped = events._embedded?.events.map(mapToConcertCard) ?? [];
      return mapped.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    },
    enabled: !!city
  });

  if (!concertList) return;

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
