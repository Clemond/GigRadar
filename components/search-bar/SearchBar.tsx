import { TextInput } from "react-native";
import { StyleSheet } from "react-native";

export default function SearchBar() {
  return (
    <TextInput
      placeholder="Search artist, city, or date..."
      placeholderTextColor="#8CAFC5"
      style={styles.searchInput}
    />
  );
}

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: "#13353C",
    borderRadius: 10,
    padding: 14,
    color: "#FFFFFF",
    marginBottom: 20
  }
});
