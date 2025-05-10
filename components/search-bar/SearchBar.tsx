import { TextInput, StyleSheet } from "react-native";

export default function SearchBar({
  searchTerm,
  setSearchTerm
}: {
  searchTerm?: string;
  setSearchTerm?: (text: string) => void;
}) {
  return (
    <TextInput
      placeholder="Search artist, city, or date..."
      placeholderTextColor="#8CAFC5"
      style={styles.searchInput}
      value={searchTerm}
      onChangeText={setSearchTerm}
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
