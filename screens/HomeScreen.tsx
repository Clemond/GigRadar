import { View, Text, StyleSheet, TextInput, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ConcertList from "../components/homeScreen/ConcertList";
import BottomNavBar from "../components/nav-bar/BottomNavBar";

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

        <ConcertList concertList={recommendedEvents} />
      </SafeAreaView>
      <BottomNavBar />
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
  }
});
