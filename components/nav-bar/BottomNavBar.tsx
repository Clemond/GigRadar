import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Icon } from "react-native-paper";
import UseTypeNavigation from "../../hooks/useTypeNavigation";
import { UseCurrentScreenStore } from "../../stores/useCurrentScreenStore";
import { listOfNavBarButtons } from "../../constants/listOfNavBarButtons";

export default function BottomNavBar() {
  const navigation = UseTypeNavigation();
  const { currentScreen, setCurrentScreen } = UseCurrentScreenStore();

  return (
    <View style={styles.container}>
      {listOfNavBarButtons.map((element, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setCurrentScreen(element.screen);
            navigation.navigate(element.navigationName);
          }}
          style={
            currentScreen === element.screen
              ? styles.activeButton
              : styles.button
          }
        >
          <Icon
            color={currentScreen === element.screen ? "#FFF" : "#8CAFC5"}
            size={30}
            source={element.icon}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  button: {
    backgroundColor: "#13353C",
    borderRadius: 15,
    padding: 5
  },
  activeButton: {
    backgroundColor: "#F77E32",
    borderRadius: 15,
    padding: 5
  }
});
