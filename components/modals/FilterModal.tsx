import { Divider, Modal, Portal } from "react-native-paper";
import { Text, StyleSheet, View } from "react-native";

interface filterModalProps {
  visible: boolean;
  hideModal: () => void;
}

export default function FilterModal({ visible, hideModal }: filterModalProps) {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}
      >
        <View style={styles.filterHeader}>
          <Text style={styles.headerTitle}>Filter</Text>
          <Divider style={styles.divider} />
        </View>
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
  }
});
