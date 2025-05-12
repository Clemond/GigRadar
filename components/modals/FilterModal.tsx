import { Divider, List, Modal, Portal, RadioButton } from "react-native-paper";
import { Text, StyleSheet, View } from "react-native";
import { AVAILABLE_GENRES } from "../../constants/genres";
import { useState } from "react";

interface filterModalProps {
  visible: boolean;
  hideModal: () => void;
}

export default function FilterModal({ visible, hideModal }: filterModalProps) {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
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
          <List.Accordion title="Genre" id="1">
            {AVAILABLE_GENRES.map((genre, index) => (
              <View key={index} style={styles.listItem}>
                <List.Item title={genre} />
                <RadioButton
                  value={genre}
                  status={
                    selectedGenres.includes(genre) ? "checked" : "unchecked"
                  }
                  onPress={() => toggleGenre(genre)}
                />
              </View>
            ))}
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
