import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ImageBackground
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "react-native-paper";

const tameImpalaImage = require("../assets/tameimpala.jpg");
const billieeilishImage = require("../assets/billieeilish.jpg");
const thestrokesImage = require("../assets/thestrokes.jpg");

const recommendedEvents = [
  {
    id: "1",
    artist: "Tame Impala",
    city: "Stockholm",
    date: "2025-06-12",
    img: tameImpalaImage
  },
  {
    id: "2",
    artist: "Billie Eilish",
    city: "Gothenburg",
    date: "2025-07-05",
    img: billieeilishImage
  },
  {
    id: "3",
    artist: "The Strokes",
    city: "Copenhagen",
    date: "2025-08-20",
    img: thestrokesImage
  }
];

export default function HomeScreen() {
  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor="#061A1E" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.greetingTitle}>Hello, Username</Text>
        <Text style={styles.greeting}>Good to see you again!</Text>

        <TextInput
          placeholder="Search artist, city, or date..."
          placeholderTextColor="#8CAFC5"
          style={styles.searchInput}
        />

        <Text style={styles.sectionTitle}>Recommended for You</Text>

        <View style={styles.recommendedCard}>
          <ScrollView horizontal={true}>
            {recommendedEvents.map((event) => (
              <Card key={event.id} style={styles.card} onPress={() => {}}>
                <ImageBackground
                  source={event.img}
                  imageStyle={styles.cardBackgroundImage}
                >
                  <Card.Content style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{event.artist}</Text>
                    <Text style={styles.cardSubtitle}>{event.city}</Text>
                    <Text style={styles.cardSubtitle}>{event.date}</Text>
                  </Card.Content>
                </ImageBackground>
              </Card>
            ))}
          </ScrollView>
          <TouchableOpacity style={styles.exploreButton} onPress={() => {}}>
            <Text style={styles.exploreButtonText}>Explore All Events</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  greetingTitle: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "bold"
  },
  greeting: {
    color: "#8CAFC5",
    fontSize: 15,
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
    margin: 15,
    borderRadius: 10,
    overflow: "hidden"
  },
  cardContent: {
    padding: 50,
    alignItems: "center"
  },
  cardBackgroundImage: {
    opacity: 0.5
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
  },
  eventImg: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    padding: 50,
    alignItems: "center",
    marginTop: 5
  }
});
