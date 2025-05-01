import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigation.types";
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

export default function SigninForm({
  setIsSnackbarVisible
}: {
  setIsSnackbarVisible: (boolean: boolean) => void;
}) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const { signIn } = useSignin();

  async function handleLogin() {
    Keyboard.dismiss();
    if (!email || !password) return;
    const result = await signIn(email, password);
    if (!result) {
      setIsSnackbarVisible(true);
    }
  }

  return (
    <View style={styles.card}>
      <Text style={styles.header}>Welcome Back</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#f8a8d3"
        value={email ?? ""}
        onChangeText={setEmail}
        contextMenuHidden={true}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#f8a8d3"
        secureTextEntry
        value={password ?? ""}
        onChangeText={setPassword}
        contextMenuHidden={true}
      />

      <TouchableOpacity onPress={() => navigation.navigate("Test")}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity>
        <Text style={styles.createAccount}>Create an account?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#2a2232",
    borderRadius: 20,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
    alignItems: "center"
  },
  header: {
    color: "#f8a8d3",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30
  },
  input: {
    width: "100%",
    padding: 15,
    marginBottom: 20,
    backgroundColor: "#3a2c39",
    color: "#f8a8d3",
    borderRadius: 10,
    fontSize: 16
  },
  forgotPassword: {
    color: "#f8a8d3",
    fontSize: 14,
    alignSelf: "flex-end",
    marginVertical: 5
  },
  createAccount: {
    color: "#f8a8d3",
    fontSize: 14,
    alignSelf: "flex-end",
    marginVertical: 5
  },
  loginButton: {
    width: "100%",
    padding: 18,
    backgroundColor: "#f8a8d3",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20
  },
  buttonText: {
    color: "#1c1822",
    fontSize: 18,
    fontWeight: "bold"
  },
  orText: {
    color: "#f8a8d3",
    marginVertical: 1,
    fontSize: 10
  }
});
