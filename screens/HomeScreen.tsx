import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "react-native-paper";

const recommendedEvents = [
  { id: "1", artist: "Tame Impala", city: "Stockholm", date: "2025-06-12" },
  { id: "2", artist: "Billie Eilish", city: "Gothenburg", date: "2025-07-05" },
  { id: "3", artist: "The Strokes", city: "Copenhagen", date: "2025-08-20" }
];

export default function HomeScreen() {
  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor="#061A1E" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.greeting}> Welcome Username</Text>

        <TextInput
          placeholder="Search artist, city, or date..."
          placeholderTextColor="#8CAFC5"
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
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#061A1E"
  },
  container: {
    flex: 1,
    padding: 20
  },
  greeting: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20
  },
  searchInput: {
    backgroundColor: "#13353C",
    borderRadius: 10,
    padding: 14,
    color: "#FFFFFF",
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 18,
    color: "#8CAFC5",
    marginBottom: 10,
    fontWeight: "600"
  },
  card: {
    backgroundColor: "#1A3C47",
    marginBottom: 15,
    borderRadius: 10
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold"
  },
  cardSubtitle: {
    color: "#8CAFC5"
  },
  exploreButton: {
    backgroundColor: "#F77E32",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center"
  },
  exploreButtonText: {
    color: "#061A1E",
    fontWeight: "bold"
  },
  recommendedCard: {
    borderWidth: 1,
    borderColor: "#8CAFC5",
    borderRadius: 10,
    padding: 10
  }
});
