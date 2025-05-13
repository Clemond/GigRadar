import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
  Image,
  Keyboard,
  StyleSheet
} from "react-native";
import { Snackbar } from "react-native-paper";
import { useState } from "react";
import EditAccountForm from "../components/forms/EditAccountForm";

export default function EditAccountScreen() {
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
          <EditAccountForm
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
