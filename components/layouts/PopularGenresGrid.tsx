import { View, StyleSheet } from "react-native";
import UseTypeNavigation from "../../hooks/useTypeNavigation";
import { UseCurrentScreenStore } from "../../stores/useCurrentScreenStore";
import PopularGenreCard from "../cards/PopularGenreCard";

export default function PopularGenresGrid() {
  const navigation = UseTypeNavigation();
  const { setCurrentScreen } = UseCurrentScreenStore();

  return (
    <View style={styles.genreCard}>
      <View>
        <PopularGenreCard genre="Pop" image="pop" />
        <PopularGenreCard genre="Rock" image="rock" />
      </View>
      <View>
        <PopularGenreCard genre="Rap" image="hiphop" />
        <PopularGenreCard genre="EDM" image="electronic" />
      </View>
      <View>
        <PopularGenreCard genre="Classic" image="classical" />
        <PopularGenreCard genre="Country" image="country" />
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
