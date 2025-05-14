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

  // ! add more as needed
};

export default function ExploreGenreCard({
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
          <Card.Content style={styles.cardText}>
            <Text style={styles.cardTitle}>{genre}</Text>
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
    width: 75,
    height: 75
  },
  cardBackgroundImage: {
    width: "100%",
    height: "100%"
  },
  likeButton: {
    marginLeft: 2,
    alignSelf: "flex-start"
  },
  cardText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cardTitle: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold"
  },
  cardSubtitle: {
    color: "#A7BBC7"
  }
});
