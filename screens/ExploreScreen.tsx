import { View, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import BottomNavBar from "../components/nav-bar/BottomNavBar";
import SearchBar from "../components/search-bar/SearchBar";
import FilterChipBar from "../components/filter/FilterChipBar";
import ConcertGrid from "../components/lists/ConcertGrid";
import { useState } from "react";

export default function ExploreScreen() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

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
  }
});
