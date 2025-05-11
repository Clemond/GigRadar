import { Modal, Portal } from "react-native-paper";
import { Text, StyleSheet } from "react-native";

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
        <Text>Example filter Modal. Click outside this area to dismiss.</Text>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    maxHeight: 500,
    alignSelf: "center"
  }
});
