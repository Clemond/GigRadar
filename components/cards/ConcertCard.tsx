import { ImageBackground, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { IConcertCard } from "../../types/IConcertCard";

export default function ConcertCard({ concert }: { concert: IConcertCard }) {
  return (
    <Card style={styles.card} onPress={() => {}}>
      <ImageBackground
        source={concert.img}
        imageStyle={{ opacity: 0.5 }}
        style={styles.cardBackgroundImage}
        resizeMode="cover"
      >
        <Card.Content>
          <Text style={styles.cardTitle}>{concert.artist}</Text>
          <Text style={styles.cardSubtitle}>{concert.city}</Text>
          <Text style={styles.cardSubtitle}>{concert.date}</Text>
        </Card.Content>
      </ImageBackground>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1A3C47",
    margin: 15,
    borderRadius: 10,
    overflow: "hidden",
    width: 150,
    height: 150
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
  }
});
