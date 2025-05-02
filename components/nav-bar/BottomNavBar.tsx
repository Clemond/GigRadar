import { View } from "react-native";
import { Icon } from "react-native-paper";

export default function BottomNavBar() {
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
        <View
          style={{ backgroundColor: "#F77E32", borderRadius: 15, padding: 5 }}
        >
          <Icon color="#FFF" size={30} source={"home-outline"} />
        </View>
        <View
          style={{ backgroundColor: "#13353C", borderRadius: 15, padding: 5 }}
        >
          <Icon color="#8CAFC5" size={30} source={"heart-outline"} />
        </View>
        <View
          style={{ backgroundColor: "#13353C", borderRadius: 15, padding: 5 }}
        >
          <Icon color="#8CAFC5" size={30} source={"magnify"} />
        </View>
        <View
          style={{ backgroundColor: "#13353C", borderRadius: 15, padding: 5 }}
        >
          <Icon color="#8CAFC5" size={30} source={"cog-outline"} />
        </View>
      </View>
    </View>
  );
}
