import {
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet
} from "react-native";
import { Card } from "react-native-paper";

interface ExploreGenreCardProps {
  genre: string;
  image: string;
}

const genreImages: Record<string, any> = {
  pop: require("../../assets/pop-genre.jpg"),
  rock: require("../../assets/rock-genre.jpg"),
  hiphop: require("../../assets/hiphop-genre.jpg"),
  electronic: require("../../assets/electronic-genre.jpg"),
  classical: require("../../assets/classical-genre.jpg"),
  country: require("../../assets/country-genre.jpg")
};

export default function PopularGenreCard({
  genre,
  image
}: ExploreGenreCardProps) {
  return (
    <Card style={styles.card} onPress={() => {}}>
      <TouchableOpacity onPress={() => {}}>
        <ImageBackground
          source={genreImages[image]}
          imageStyle={{ opacity: 0.5 }}
          style={styles.cardBackgroundImage}
          resizeMode="cover"
        >
          <Card.Content style={styles.cardContentText}>
            <Text style={styles.cardText}>{genre}</Text>
          </Card.Content>
        </ImageBackground>
      </TouchableOpacity>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1A3C47",
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    width: 90,
    height: 70
  },
  cardBackgroundImage: {
    width: "100%",
    height: "100%"
  },
  cardContentText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cardText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold"
  }
});
