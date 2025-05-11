import {
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Card, Icon } from "react-native-paper";
import { useState } from "react";
import { ITicketmasterEvent } from "../../types/ITicketmasterEvent";

export default function ConcertCard({
  concert
}: {
  concert: ITicketmasterEvent;
}) {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <Card style={styles.card} onPress={() => {}}>
      <ImageBackground
        source={{ uri: concert.images?.[0].url }}
        imageStyle={{ opacity: 0.5 }}
        style={styles.cardBackgroundImage}
        resizeMode="cover"
      >
        <TouchableOpacity
          style={styles.likeButton}
          onPress={() => setIsLiked(!isLiked)}
        >
          <Icon
            size={25}
            source={isLiked ? "heart" : "heart-outline"}
            color="#F77E32"
          />
        </TouchableOpacity>
        <Card.Content style={styles.cardText}>
          <Text style={styles.cardTitle}>
            {concert._embedded?.attractions?.[0].name}
          </Text>
          <Text style={styles.cardSubtitle}>
            {concert._embedded?.venues?.[0].city?.name}
          </Text>
          <Text style={styles.cardSubtitle}>
            {concert.dates?.start?.localDate}
          </Text>
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
