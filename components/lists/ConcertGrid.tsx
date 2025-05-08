import { View, ScrollView, StyleSheet } from "react-native";
import { useLocationStore } from "../../stores/useLocationStore";
import { useQuery } from "@tanstack/react-query";
import { searchConcertsByCity } from "../../api/APIMethods";
import { mapToConcertCard } from "../../utils/eventMapper";
import ConcertCard from "../cards/ConcertCard";

export default function ConcertGrid() {
  const { city } = useLocationStore();

  const {
    data: concertList,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["concerts", city],
    queryFn: async () => {
      if (!city) return;
      const events = await searchConcertsByCity(city, 10);
      const mapped = events._embedded?.events.map(mapToConcertCard) ?? [];
      return mapped.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    }
  });

  if (!concertList) {
    console.error("Error fetching concerts");
    return;
  }

  return (
    <ScrollView contentContainerStyle={styles.gridContainer}>
      {concertList.map((event) => (
        <View key={event.id} style={styles.cardWrapper}>
          <ConcertCard concert={event} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  cardWrapper: {
    width: "50%",
    alignItems: "center"
  }
});
