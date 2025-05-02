import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
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
    <View
      style={{
        paddingHorizontal: 15,
        paddingBottom: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        {listOfButtons.map((element, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setCurrentScreen(element.screen);
            }}
            style={{
              backgroundColor:
                currentScreen === element.screen ? "#F77E32" : "#13353C",
              borderRadius: 15,
              padding: 5
            }}
          >
            <Icon
              color={currentScreen === element.screen ? "#FFF" : "#8CAFC5"}
              size={30}
              source={element.icon}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
