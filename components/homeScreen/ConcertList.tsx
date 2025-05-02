import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ImageBackground
} from "react-native";
import { Card } from "react-native-paper";

export default function ConcertList({
  concertList
}: {
  concertList: {
    id: string;
    artist: string;
    city: string;
    date: string;
    img: any;
  }[];
}) {
  return (
    <View style={styles.recommendedCard}>
      <ScrollView horizontal={true}>
        {concertList.map((event) => (
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
  );
}

const styles = StyleSheet.create({
  recommendedCard: {
    borderWidth: 1,
    borderColor: "#8CAFC5",
    borderRadius: 10,
    padding: 10
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
  }
});
