// screens/HomeScreen.tsx
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "react-native-paper";

const recommendedEvents = [
  { id: "1", artist: "Tame Impala", city: "Stockholm", date: "2025-06-12" },
  { id: "2", artist: "Billie Eilish", city: "Gothenburg", date: "2025-07-05" },
  { id: "3", artist: "The Strokes", city: "Copenhagen", date: "2025-08-20" }
];

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#2A2232", "#e0b0a0", "#150E17"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.greeting}> Welcome Username</Text>

        <TextInput
          placeholder="Search artist, city, or date..."
          placeholderTextColor="#f8a8d3"
          style={styles.searchInput}
        />

        <Text style={styles.sectionTitle}>Recommended for You</Text>

        <View style={styles.recommendedCard}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {recommendedEvents.map((event) => (
              <Card key={event.id} style={styles.card} onPress={() => {}}>
                <Card.Content>
                  <Text style={styles.cardTitle}>{event.artist}</Text>
                  <Text style={styles.cardSubtitle}>
                    {event.city} – {event.date}
                  </Text>
                </Card.Content>
              </Card>
            ))}

            <TouchableOpacity style={styles.exploreButton} onPress={() => {}}>
              <Text style={styles.exploreButtonText}>Explore All Events</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 20
  },
  greeting: {
    color: "#f8a8d3",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20
  },
  searchInput: {
    backgroundColor: "#3a2c39",
    borderRadius: 10,
    padding: 14,
    color: "#f8a8d3",
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 18,
    color: "#f8a8d3",
    marginBottom: 10,
    fontWeight: "600"
  },
  card: {
    backgroundColor: "#2a2232",
    marginBottom: 15,
    borderRadius: 10
  },
  cardTitle: {
    color: "#f8a8d3",
    fontSize: 18,
    fontWeight: "bold"
  },
  cardSubtitle: {
    color: "#ccc"
  },
  exploreButton: {
    backgroundColor: "#f8a8d3",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center"
  },
  exploreButtonText: {
    color: "#1c1822",
    fontWeight: "bold"
  },
  recommendedCard: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    padding: 10
  }
});
