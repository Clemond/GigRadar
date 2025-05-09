import { View, StyleSheet, FlatList, Text } from "react-native";
import { useLocationStore } from "../../stores/useLocationStore";
import { useInfiniteQuery } from "@tanstack/react-query";
import {
  searchConcertsByCity,
  searchConcertsByCountry
} from "../../api/APIMethods";
import { mapToConcertCard } from "../../utils/eventMapper";
import ConcertCard from "../cards/ConcertCard";
import { ITicketmasterSearchResponse } from "../../types/ITicketmasterEvent";
import { IConcertCard } from "../../types/IConcertCard";
import { ActivityIndicator } from "react-native-paper";
import { IGenreName } from "../../types/IGenreName";
import { deduplicateConcerts } from "../../utils/deduplicateConcerts";

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
    getNextPageParam: (lastPage, pages) => {
      const currentPage = lastPage.page?.number ?? pages.length - 1;
      const totalPages = lastPage.page?.totalPages ?? 0;
      return currentPage + 1 < totalPages ? currentPage + 1 : undefined;
    },
    queryFn: async ({ pageParam = 0 }) => {
      if (isNearbySelected) {
        if (!city) {
          throw new Error("Missing city ");
        }
        return await searchConcertsByCity(city, 10, pageParam as number);
      } else {
        if (!countryCode) {
          throw new Error("Missing country code");
        }

        const genreFilters = selectedFilters.filter((f): f is IGenreName =>
          [
            "Pop",
            "Country",
            "Electronic",
            "Rock",
            "HipHop",
            "Jazz",
            "Classical"
          ].includes(f as IGenreName)
        );

        return await searchConcertsByCountry(
          countryCode,
          pageParam as number,
          10,
          genreFilters
        );
      }
    }
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
      <ActivityIndicator animating={true} color="#2a2232"></ActivityIndicator>
    );
  }

  if (isError) {
    return <Text>Error loading concerts. Please try again.</Text>;
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
  }
});
