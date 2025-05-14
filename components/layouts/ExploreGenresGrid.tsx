import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import UseTypeNavigation from "../../hooks/useTypeNavigation";
import { UseCurrentScreenStore } from "../../stores/useCurrentScreenStore";
import ExploreGenreCard from "../cards/ExploreGenreCard";

export default function ExploreGenresGrid() {
  const navigation = UseTypeNavigation();
  const { setCurrentScreen } = UseCurrentScreenStore();

  return (
    <View style={styles.recommendedCard}>
      <View>
        <ExploreGenreCard genre="Pop" image="pop" />
        <ExploreGenreCard genre="Rock" image="rock" />
      </View>
      <View>
        <ExploreGenreCard genre="Rap" image="hiphop" />
        <ExploreGenreCard genre="EDM" image="electronic" />
      </View>
      <View>
        <ExploreGenreCard genre="Classic" image="classical" />
        <ExploreGenreCard genre="Country" image="country" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  recommendedCard: {
    justifyContent: "space-evenly",
    borderColor: "#8CAFC5",
    borderRadius: 10,
    flexDirection: "row"
  }
});
