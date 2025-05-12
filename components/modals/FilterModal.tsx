import { Divider, List, Modal, Portal, RadioButton } from "react-native-paper";
import { Text, StyleSheet, View } from "react-native";
import { AVAILABLE_GENRES } from "../../constants/genres";

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
  const toggleGenre = (genre: string) => {
    setSelectedFilters((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

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
        </View>
        <List.AccordionGroup>
          <List.Accordion
            title={`Genre  ${selectedFilters.map((filter) => ` ${filter}`)}`}
            id="1"
          >
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
          <List.Accordion
            title={`Date  ${selectedFilters.map((filter) => ` ${filter}`)}`}
            id="2"
          >
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
        </List.AccordionGroup>
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
