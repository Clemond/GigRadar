import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ImageBackground
} from "react-native";
import { Card } from "react-native-paper";
import { IConcertCard } from "../../types/IConcertCard";
import UseTypeNavigation from "../../hooks/useTypeNavigation";

export default function ConcertList({
  concertList
}: {
  concertList: IConcertCard[];
}) {
  const navigation = UseTypeNavigation();

  return (
    <View style={styles.recommendedCard}>
      <ScrollView horizontal={true}>
        {concertList.map((event) => (
          <Card key={event.id} style={styles.card} onPress={() => {}}>
            <ImageBackground
              source={event.img}
              imageStyle={{ opacity: 0.5 }}
              style={styles.cardBackgroundImage}
              resizeMode="cover"
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
      <TouchableOpacity
        style={styles.exploreButton}
        onPress={() => {
          navigation.navigate("ExploreScreen");
        }}
      >
        <Text style={styles.exploreButtonText}>Explore All Events</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  recommendedCard: {
    borderWidth: 1,
    borderColor: "#8CAFC5",
    borderRadius: 10
  },
  card: {
    backgroundColor: "#1A3C47",
    margin: 15,
    borderRadius: 10,
    overflow: "hidden",
    width: 150,
    height: 150
  },
  cardContent: {
    alignContent: "center",
    justifyContent: "center"
  },
  cardBackgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold"
  },
  cardSubtitle: {
    color: "#A7BBC7"
  },
  exploreButton: {
    backgroundColor: "#F77E32",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    margin: 5
  },
  exploreButtonText: {
    color: "#061A1E",
    fontWeight: "bold"
  }
});
