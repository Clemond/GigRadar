import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-paper";

export function OptionRow({
  icon,
  label,
  onPress
}: {
  icon: string;
  label: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.optionRow} onPress={onPress}>
      <Icon source={icon} size={22} color="#FFF" />
      <Text style={styles.optionText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomColor: "#1E2A32",
    borderBottomWidth: 1
  },
  optionText: {
    marginLeft: 15,
    fontSize: 16,
    color: "#FFF"
  }
});
