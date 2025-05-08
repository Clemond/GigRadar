import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import BottomNavBar from "../components/nav-bar/BottomNavBar";
import SearchBar from "../components/search-bar/SearchBar";
import FilterChipBar from "../components/filter/FilterChipBar";
import ConcertList from "../components/lists/ConcertList";

export default function ExploreScreen() {
  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor="#061A1E" />
      <SafeAreaView style={styles.container}>
        <SearchBar />
        <FilterChipBar />
      </SafeAreaView>

      <BottomNavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between"
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15
  }
});
