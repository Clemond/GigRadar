import { View, Text, StatusBar, SafeAreaView, StyleSheet } from "react-native";
import BottomNavBar from "../components/nav-bar/BottomNavBar";

export default function AccountScreen() {
  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor="#061A1E" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topContent}>
          <Text>This is the account Screen :D</Text>
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
    paddingVertical: 15
  },
  topContent: {
    flex: 1
  }
});
