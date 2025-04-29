import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with", username, password);
    Keyboard.dismiss();
  };

  const handleGoogleLogin = () => {
    console.log("Login with Google");
  };

  const handleFacebookLogin = () => {
    console.log("Login with Facebook");
  };

  return (
    <LinearGradient
      colors={["#2A2232", "#e0b0a0", "#150E17"]} // Lighter at the top, darker at the bottom
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
            <Image
              source={require("./assets/gigradar-logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
            <View style={styles.card}>
              <Text style={styles.header}>Welcome Back</Text>

              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#f8a8d3"
                value={username}
                onChangeText={setUsername}
                contextMenuHidden={true}
              />

              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#f8a8d3"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                contextMenuHidden={true}
              />

              <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>

              <Text style={styles.orText}>OR</Text>

              <TouchableOpacity>
                <Text style={styles.createAccount}>Create an account?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#1c1822",
    alignItems: "center",
    padding: 20
  },
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
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20
  },
  gradient: {
    flex: 1
  }
});
