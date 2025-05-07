import {
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Snackbar } from "react-native-paper";
import { useState } from "react";
import { StatusBar } from "react-native";
import RegisterForm from "../components/forms/RegisterForm";

export default function RegisterScreen() {
  const [isSnackbarVisible, setIsSnackbarVisible] = useState<boolean>(false);
  const onDismissSnackBar = () => setIsSnackbarVisible(false);
  const [snackbarMsg, setSnackbarMsg] = useState<string | null>(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#061A1E" barStyle="light-content" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
          style={styles.container}
        >
          <Image
            source={require("../assets/gigradar-icon.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <RegisterForm
            setSnackbarMsg={setSnackbarMsg}
            setIsSnackbarVisible={setIsSnackbarVisible}
          />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <Snackbar
        visible={isSnackbarVisible}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Close"
        }}
      >
        {snackbarMsg}
      </Snackbar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 50
  }
});
