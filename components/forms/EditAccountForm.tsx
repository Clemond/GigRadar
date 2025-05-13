import { useState } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Keyboard
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useSignup } from "../../hooks/useSignup";
import { updateUserDataInFirebase } from "../../utils/updateUserDataInFirebase";
import UseTypeNavigation from "../../hooks/useTypeNavigation";
import { useUserStore } from "../../stores/useUserStore";

export default function EditAccountForm({
  setSnackbarMsg,
  setIsSnackbarVisible
}: {
  setSnackbarMsg: (msg: string) => void;
  setIsSnackbarVisible: (boolean: boolean) => void;
}) {
  const { userData, setUserData } = useUserStore();

  const navigation = UseTypeNavigation();
  const [firstname, setFirstname] = useState<string>(userData?.firstname || "");
  const [surname, setSurname] = useState<string>(userData?.surname || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    Keyboard.dismiss();
    if (!firstname.trim() || !surname.trim()) {
      setSnackbarMsg("Both fields are required");
      setIsSnackbarVisible(true);
      return;
    }

    try {
      setLoading(true);
      await updateUserDataInFirebase({ firstname, surname });
      setUserData({ ...userData!, firstname, surname });
      setSnackbarMsg("Profile updated");
      navigation.navigate("AccountScreen");
    } catch {
      setSnackbarMsg("Update failed");
    } finally {
      setIsSnackbarVisible(true);
      setLoading(false);
    }
  };
  return (
    <View style={styles.card}>
      <Text style={styles.headerText}>Update Profile</Text>

      <TextInput
        style={styles.input}
        placeholder="Firstname"
        placeholderTextColor="#8CAFC5"
        value={firstname}
        onChangeText={setFirstname}
        contextMenuHidden={true}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Surname"
        placeholderTextColor="#8CAFC5"
        value={surname}
        onChangeText={setSurname}
        contextMenuHidden={true}
        autoCapitalize="none"
      />

      <TouchableOpacity onPress={() => navigation.navigate("AccountScreen")}>
        <Text style={styles.smallText}>Go back without saving</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleUpdate}>
        <Text style={styles.buttonText}>
          {loading ? (
            <ActivityIndicator animating={true} color="#2a2232" />
          ) : (
            "Save changes"
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
