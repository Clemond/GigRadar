import { View, StyleSheet, FlatList, Text } from "react-native";
import { useLocationStore } from "../../stores/useLocationStore";
import { useInfiniteQuery } from "@tanstack/react-query";
import { mapToConcertCard } from "../../utils/eventMapper";
import ConcertCard from "../cards/ConcertCard";
import { ITicketmasterSearchResponse } from "../../types/ITicketmasterEvent";
import { IConcertCard } from "../../types/IConcertCard";
import { ActivityIndicator } from "react-native-paper";
import { deduplicateConcerts } from "../../utils/deduplicateConcerts";
import { getNextPageParam } from "../../utils/getNextPageParam";
import { fetchConcerts } from "../../utils/fetchConcerts";

interface ConcertGridProps {
  selectedFilters: string[];
}

export default function ConcertGrid({ selectedFilters }: ConcertGridProps) {
  const { countryCode, city } = useLocationStore();
  const isNearbySelected = selectedFilters.includes("Nearby");

  const {
    data: concertList,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError
  } = useInfiniteQuery<ITicketmasterSearchResponse>({
    queryKey: ["concerts", countryCode, isNearbySelected, selectedFilters],
    enabled: !!countryCode,
    initialPageParam: 0,
    getNextPageParam,
    queryFn: ({ pageParam = 0 }) =>
      fetchConcerts({
        city,
        countryCode,
        pageParam: Number(pageParam),
        isNearbySelected,
        selectedFilters
      })
  });

  const allConcerts: IConcertCard[] = deduplicateConcerts(
    concertList?.pages.flatMap((page) =>
      (page._embedded?.events ?? []).map(mapToConcertCard)
    ) ?? []
  );

  const handleEndReached = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  if (isLoading) {
    return (
      <ActivityIndicator
        style={styles.activityIndicator}
        animating={true}
        color="#F77E32"
        size={70}
      ></ActivityIndicator>
    );
  }

  if (isError) {
    return <Text>Error loading concerts. Please try again.</Text>;
  }

  if (allConcerts.length === 0) {
    return <Text style={styles.message}>No concerts found</Text>;
  }

  return (
    <FlatList
      data={allConcerts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.cardWrapper}>
          <ConcertCard concert={item} />
        </View>
      )}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.1}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    alignItems: "center"
  },
  message: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 20,
    color: "#F77E32"
  },
  activityIndicator: {
    flex: 1
  }
});
