import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Avatar, Divider } from "react-native-paper";
import { useUserStore } from "../stores/useUserStore";
import BottomNavBar from "../components/nav-bar/BottomNavBar";
import { OptionRow } from "../components/options-row/OptionsRow";

export default function AccountScreen() {
  const { userData } = useUserStore();
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

        <View style={styles.options}>
          <OptionRow icon="account-edit" label="Edit Profile" />
          <OptionRow icon="calendar-check" label="My Bookings" />
          <OptionRow icon="music" label="Favorite Genres" />
          <OptionRow icon="cog" label="Settings" />
          <OptionRow icon="logout" label="Log Out" />
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
  }
});
