import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from "react-native";
import UseTypeNavigation from "../../hooks/useTypeNavigation";
import ConcertCard from "../cards/ConcertCard";
import { useLocationStore } from "../../stores/useLocationStore";
import { searchConcertsByCity } from "../../api/APIMethods";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator } from "react-native-paper";

export default function ConcertList() {
  const navigation = UseTypeNavigation();
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
      return events._embedded?.events ?? [];
    },
    enabled: !!city
  });

  if (!concertList) return;

  if (isLoading) {
    return (
      <ActivityIndicator
        animating={true}
        color="#F77E32"
        size={70}
      ></ActivityIndicator>
    );
  }

  if (isError) {
    return <Text>Error loading concerts. Please try again.</Text>;
  }

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
          navigation.navigate("ExploreScreen", {});
        }}
      >
        <Text style={styles.exploreButtonText}>Explore All Events</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  recommendedCard: {
    borderColor: "#8CAFC5",
    borderRadius: 10
  },
  exploreButton: {
    backgroundColor: "#F77E32",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
    margin: 5
  },
  exploreButtonText: {
    color: "#061A1E",
    fontWeight: "bold"
  }
});
