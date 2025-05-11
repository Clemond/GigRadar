import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import { Avatar, Divider } from "react-native-paper";
import { useUserStore } from "../stores/useUserStore";
import BottomNavBar from "../components/nav-bar/BottomNavBar";
import { OptionRow } from "../components/options-row/OptionsRow";
import UseTypeNavigation from "../hooks/useTypeNavigation";
import { getAccountOptions } from "../constants/listOfAccountOptions.";
import { useLocationStore } from "../stores/useLocationStore";
import { UseCurrentScreenStore } from "../stores/useCurrentScreenStore";
import { getAuth } from "firebase/auth";
import { useFavorites } from "../hooks/useFavorites";

export default function AccountScreen() {
  const { userData } = useUserStore();
  const navigation = UseTypeNavigation();
  const { clearUserData } = useUserStore();
  const { clearLocation } = useLocationStore();
  const { resetCurrentScreen } = UseCurrentScreenStore();
  const uid = getAuth().currentUser?.uid;
  const savedConcertListLength = useFavorites(uid).length;
  const { setCurrentScreen } = UseCurrentScreenStore();
  const listOfOptions = getAccountOptions(
    navigation,
    clearUserData,
    clearLocation,
    resetCurrentScreen
  );

  const initials = `${userData?.firstname?.[0] ?? ""}${
    userData?.surname?.[0] ?? ""
  }`.toUpperCase();

  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Avatar.Text size={64} label={initials} style={styles.avatar} />
          <Text
            style={styles.name}
          >{`${userData?.firstname} ${userData?.surname}`}</Text>
          <Text style={styles.email}>{userData?.email}</Text>
        </View>

        <Divider style={styles.divider} />

        <TouchableOpacity
          style={styles.favoriteCard}
          onPress={() => {
            navigation.navigate("FavoriteScreen");
            setCurrentScreen("favorite");
          }}
        >
          <Text style={styles.favoriteCardNameText}>Saved concerts</Text>
          <Text style={styles.favoriteCardNameNumber}>
            {savedConcertListLength}
          </Text>
        </TouchableOpacity>

        <View style={styles.options}>
          {listOfOptions.map((option, index) => (
            <OptionRow
              key={index}
              icon={option.icon}
              label={option.label}
              onPress={option.onPress}
            />
          ))}
        </View>
      </SafeAreaView>
      <BottomNavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  header: {
    alignItems: "center",
    marginBottom: 30
  },
  avatar: {
    backgroundColor: "#8CAFC5"
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "#FFFFFF"
  },
  email: {
    fontSize: 15,
    color: "#8CAFC5"
  },
  divider: {
    marginVertical: 10,
    backgroundColor: "#8CAFC5"
  },
  options: {
    marginTop: 10
  },
  favoriteCard: {
    backgroundColor: "#13353C",
    padding: 20,
    alignItems: "center",
    borderRadius: 10
  },
  favoriteCardNameText: {
    color: "#FFF",
    fontSize: 20
  },
  favoriteCardNameNumber: {
    color: "#F77E32",
    fontSize: 25
  }
});
