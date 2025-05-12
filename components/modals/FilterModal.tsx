import {
  Chip,
  Divider,
  List,
  Modal,
  Portal,
  RadioButton,
  Button
} from "react-native-paper";
import { Text, StyleSheet, View } from "react-native";
import { AVAILABLE_GENRES } from "../../constants/genres";
import { useLocationStore } from "../../stores/useLocationStore";

interface filterModalProps {
  visible: boolean;
  hideModal: () => void;
  selectedFilters: string[];
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function FilterModal({
  visible,
  hideModal,
  selectedFilters,
  setSelectedFilters
}: filterModalProps) {
  const { city } = useLocationStore();

  const toggleGenre = (genre: string) => {
    setSelectedFilters((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  if (!city) return;

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}
        style={{ justifyContent: "flex-start", marginTop: 20 }}
      >
        <View style={styles.filterHeader}>
          <Text style={styles.headerTitle}>Filter</Text>
          <Divider style={styles.divider} />
          <Text style={{ fontWeight: "bold" }}>
            {selectedFilters.length !== 0 && "Selected filters"}
          </Text>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 5,
              margin: 5
            }}
          >
            {selectedFilters.map((filter, index) => (
              <Chip key={index} mode="outlined">
                {filter}
              </Chip>
            ))}
          </View>
        </View>

        <List.AccordionGroup>
          <List.Accordion title="Genre" id="1">
            {AVAILABLE_GENRES.map((genre, index) => (
              <View key={index} style={styles.listItem}>
                <List.Item title={genre} />
                <RadioButton
                  value={genre}
                  status={
                    selectedFilters.includes(genre) ? "checked" : "unchecked"
                  }
                  onPress={() => toggleGenre(genre)}
                />
              </View>
            ))}
          </List.Accordion>
          <List.Accordion title="Date" id="2">
            <View style={styles.listItem}>
              <List.Item title={"Concert's Today"} />
              <RadioButton
                value={"Today"}
                status={
                  selectedFilters.includes("Today") ? "checked" : "unchecked"
                }
                onPress={() => toggleGenre("Today")}
              />
            </View>
          </List.Accordion>
          <List.Accordion title="Location" id="3">
            <View style={styles.listItem}>
              <List.Item title={"In your city"} />
              <RadioButton
                value={city}
                status={
                  selectedFilters.includes("Nearby") ? "checked" : "unchecked"
                }
                onPress={() => toggleGenre("Nearby")}
              />
            </View>
          </List.Accordion>
        </List.AccordionGroup>
        {selectedFilters.length !== 0 && (
          <Button onPress={() => setSelectedFilters([])}>Reset</Button>
        )}
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignSelf: "center"
  },
  filterHeader: {
    alignItems: "center"
  },
  headerTitle: {
    fontSize: 20
  },
  divider: {
    marginVertical: 10,
    width: "100%",
    backgroundColor: "#8CAFC5"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 17
  }
});
