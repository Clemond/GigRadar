import {
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import SigninForm from "../components/forms/SigninForm";
import { Snackbar } from "react-native-paper";
import { useState } from "react";

export default function SigninScreen() {
  const [isSnackbarVisible, setIsSnackbarVisible] = useState<boolean>(false);
  const onDismissSnackBar = () => setIsSnackbarVisible(false);

  return (
    <LinearGradient
      colors={["#2A2232", "#e0b0a0", "#150E17"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
            style={styles.container}
          >
            <SigninForm setIsSnackbarVisible={setIsSnackbarVisible} />
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
      <Snackbar
        visible={isSnackbarVisible}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Close"
        }}
      >
        Wrong Credentials
      </Snackbar>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#1c1822",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  gradient: {
    flex: 1
  }
});
