import { useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Icon } from "react-native-paper";

export default function BottomNavBar() {
  const [currentScreen, setCurrentScreen] = useState("home");

  const listOfButtons = [
    {
      icon: "home-outline",
      screen: "home"
    },
    {
      icon: "heart-outline",
      screen: "heart"
    },
    {
      icon: "magnify",
      screen: "explore"
    },
    {
      icon: "cog-outline",
      screen: "settings"
    }
  ];

  return (
    <View style={styles.container}>
      {listOfButtons.map((element, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setCurrentScreen(element.screen);
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
