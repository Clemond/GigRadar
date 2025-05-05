import {
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Snackbar } from "react-native-paper";
import { useState } from "react";
import { StatusBar } from "react-native";
import CreateAccountForm from "../components/forms/CreateAccountForm";

export default function CreateAccountScreen() {
  const [isSnackbarVisible, setIsSnackbarVisible] = useState<boolean>(false);
  const onDismissSnackBar = () => setIsSnackbarVisible(false);

  //! Check if there are things to remove from this screen since ints create an account screen

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#061A1E" barStyle="light-content" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
          style={styles.container}
        >
          <CreateAccountForm setIsSnackbarVisible={setIsSnackbarVisible} />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <Snackbar
        visible={isSnackbarVisible}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Close"
        }}
      >
        Wrong Credentials
      </Snackbar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#061A1E",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  }
});
