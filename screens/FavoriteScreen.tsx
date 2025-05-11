import { View, StyleSheet, StatusBar, SafeAreaView, Text } from "react-native";
import BottomNavBar from "../components/nav-bar/BottomNavBar";
import { getAuth } from "@firebase/auth";
import { useFavorites } from "../hooks/useFavorites";

export default function FavoriteScreen() {
  const uid = getAuth().currentUser?.uid;
  const favorites = useFavorites(uid);

  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor="#061A1E" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topContent}>
          <Text>Favorites Screen</Text>
          {favorites.length > 0 ? (
            favorites.map((concert) => (
              <Text key={concert.id}>{concert.name}</Text>
            ))
          ) : (
            <Text>No favorite concerts yet.</Text>
          )}
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
