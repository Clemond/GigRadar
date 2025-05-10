import { View, StyleSheet, StatusBar, SafeAreaView, Text } from "react-native";
import BottomNavBar from "../components/nav-bar/BottomNavBar";
import SearchBar from "../components/search-bar/SearchBar";
import FilterChipBar from "../components/filter/FilterChipBar";
import ConcertGrid from "../components/lists/ConcertGrid";
import { useEffect, useState } from "react";
import { useLocationStore } from "../stores/useLocationStore";

export default function ExploreScreen() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isTodayChecked, setTodayChecked] = useState<boolean>(false);
  const { country, city } = useLocationStore();

  useEffect(() => {
    setTodayChecked(selectedFilters.includes("Nearby"));
  }, [selectedFilters]);

  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor="#061A1E" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topContent}>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <FilterChipBar
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
          <Text style={styles.locationText}>
            Concerts in {isTodayChecked ? `${city}` : `${country}`}
          </Text>
          <ConcertGrid
            searchTerm={searchTerm}
            selectedFilters={selectedFilters}
          />
        </View>
      </SafeAreaView>
      <BottomNavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  topContent: {
    flex: 1
  },
  locationText: {
    color: "#8CAFC5",
    fontSize: 18
  }
});
