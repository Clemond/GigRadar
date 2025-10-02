import {
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  View
} from "react-native";
import { Card } from "react-native-paper";
import UseTypeNavigation from "../../hooks/useTypeNavigation";
import { IGenreName } from "../../types/IGenreName";

interface ExploreGenreCardProps {
  genre: string;
  image: string;
  genreToPass: IGenreName;
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
  image,
  genreToPass
}: ExploreGenreCardProps) {
  const navigation = UseTypeNavigation();

  return (
    <Card style={styles.card}>
      <View style={styles.cardWrapper}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ExploreScreen", { filter: genreToPass });
          }}
        >
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
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1A3C47",
    margin: 10,
    width: 90,
    height: 70
  },
  cardWrapper: {
    borderRadius: 10,
    overflow: "hidden"
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
