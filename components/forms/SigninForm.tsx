import { useState } from "react";
import { useSignin } from "../../hooks/useSignin";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Keyboard
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { setUserDataFromFirebase } from "../../utils/setUserDataFromFirebase";
import UseTypeNavigation from "../../hooks/useTypeNavigation";

export default function SigninForm({
  setSnackbarMsg,
  setIsSnackbarVisible
}: {
  setSnackbarMsg: (msg: string) => void;
  setIsSnackbarVisible: (boolean: boolean) => void;
}) {
  const navigation = UseTypeNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signIn, loading } = useSignin();

  async function handleLogin() {
    Keyboard.dismiss();
    const user = await signIn(email, password);

    if (!user) {
      setSnackbarMsg("Wrong Credentials");
      setIsSnackbarVisible(true);
      return;
    }
    await setUserDataFromFirebase();

    if (user) {
      navigation.navigate("HomeScreen");
    }
  }

  return (
    <View style={styles.card}>
      <Text style={styles.headerText}>Welcome Back</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#8CAFC5"
        value={email}
        onChangeText={setEmail}
        contextMenuHidden={true}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#8CAFC5"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        contextMenuHidden={true}
        autoCapitalize="none"
      />

      <TouchableOpacity>
        <Text style={styles.smallText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("CreateAccountScreen")}
      >
        <Text style={styles.smallText}>Create an account?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>
          {loading ? (
            <ActivityIndicator animating={true} color="#2a2232" />
          ) : (
            "Login"
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "#0C2D33",
    borderRadius: 10,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "thin",
    marginBottom: 30
  },
  input: {
    width: "100%",
    padding: 15,
    marginBottom: 20,
    backgroundColor: "#13353C",
    color: "#FFFFFF",
    borderRadius: 10,
    fontSize: 16
  },
  smallText: {
    color: "#8CAFC5",
    fontSize: 14,
    alignSelf: "flex-end",
    marginVertical: 5
  },
  loginButton: {
    width: "100%",
    padding: 15,
    backgroundColor: "#F77E32",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20
  },
  buttonText: {
    color: "#061A1E",
    fontSize: 18,
    fontWeight: "bold"
  }
});
