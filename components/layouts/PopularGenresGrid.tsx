import { View, StyleSheet } from "react-native";
import PopularGenreCard from "../cards/PopularGenreCard";

export default function PopularGenresGrid() {
  return (
    <View style={styles.genreCard}>
      <View>
        <PopularGenreCard genre="Pop" image="pop" genreToPass={"Pop"} />
        <PopularGenreCard genre="Rock" image="rock" genreToPass={"Rock"} />
      </View>
      <View>
        <PopularGenreCard genre="Rap" image="hiphop" genreToPass={"HipHop"} />
        <PopularGenreCard
          genre="EDM"
          image="electronic"
          genreToPass={"Electronic"}
        />
      </View>
      <View>
        <PopularGenreCard
          genre="Classic"
          image="classical"
          genreToPass={"Classical"}
        />
        <PopularGenreCard
          genre="Country"
          image="country"
          genreToPass={"Country"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  genreCard: {
    justifyContent: "center",
    borderColor: "#8CAFC5",
    borderRadius: 10,
    flexDirection: "row"
  }
});
