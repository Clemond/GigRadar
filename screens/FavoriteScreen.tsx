import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Text,
  FlatList
} from "react-native";
import BottomNavBar from "../components/nav-bar/BottomNavBar";
import { getAuth } from "@firebase/auth";
import { useFavorites } from "../hooks/useFavorites";
import ConcertCard from "../components/cards/ConcertCard";
import { useEffect } from "react";
import { UseCurrentScreenStore } from "../stores/useCurrentScreenStore";

export default function FavoriteScreen() {
  const uid = getAuth().currentUser?.uid;
  const favorites = useFavorites(uid);
  const { setCurrentScreen } = UseCurrentScreenStore();

  useEffect(() => {
    setCurrentScreen("favorite");
  }, []);

  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor="#061A1E" />
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>Your Saved Concerts</Text>
        {favorites.length > 0 ? (
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ConcertCard concert={item} />}
            numColumns={2}
            contentContainerStyle={styles.grid}
          />
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No favorites yet </Text>
          </View>
        )}
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
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  grid: {
    alignItems: "center"
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  emptyText: {
    color: "#A7BBC7",
    fontSize: 16
  }
});
