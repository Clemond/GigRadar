import { Divider, Modal, Portal, Button } from "react-native-paper";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Linking,
  ScrollView
} from "react-native";
import { ITicketmasterEvent } from "../../types/ITicketmasterEvent";
import { addConcertToCalendar } from "../../utils/addConcertToCalender";

interface ConcertDetailsModalProps {
  visible: boolean;
  hideModal: () => void;
  concert: ITicketmasterEvent;
}

export default function ConcertDetailsModal({
  visible,
  hideModal,
  concert
}: ConcertDetailsModalProps) {
  const openTicketUrl = () => {
    const ticketUrl = concert.url || "https://ticketmaster.com";
    Linking.openURL(ticketUrl);
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}
      >
        <ScrollView>
          <ImageBackground
            source={{ uri: concert.images?.[0]?.url }}
            style={styles.bannerImage}
            imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
          >
            <View style={styles.overlay}>
              <Text style={styles.headerTitle}>
                {concert._embedded?.attractions?.[0]?.name ?? "TBA"}
              </Text>
            </View>
          </ImageBackground>

          <View style={styles.timeAndPlace}>
            <Text style={styles.label}>
              {concert._embedded?.venues?.[0]?.name}
            </Text>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={styles.label}>
                {concert._embedded?.venues?.[0]?.city?.name},
              </Text>

              <Text style={styles.label}>
                {concert._embedded?.venues?.[0]?.state?.name}
              </Text>
            </View>

            <View style={{ flexDirection: "row", gap: 10 }}>
              <Text style={styles.label}>{concert.dates.start.localDate}</Text>

              <Text style={styles.label}>
                {concert.dates.start.localTime?.slice(0, 5)}
              </Text>
            </View>
          </View>

          <View style={styles.content}>
            <Divider style={styles.divider} />
            <Text style={styles.label}>
              {concert.description ||
                concert.info ||
                concert.pleaseNote ||
                "No additional information available."}
            </Text>

            <Button
              mode="outlined"
              onPress={() => addConcertToCalendar(concert)}
              style={{ marginTop: 10, borderColor: "#F77E32" }}
              labelStyle={{ color: "#F77E32" }}
            >
              Add to Calendar
            </Button>

            <Button
              mode="contained"
              onPress={openTicketUrl}
              style={styles.ticketButton}
            >
              Buy Tickets
            </Button>
          </View>
        </ScrollView>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    width: "90%",
    backgroundColor: "#061A1E",
    borderRadius: 10,
    alignSelf: "center"
  },
  bannerImage: {
    width: "100%",
    height: 180,
    justifyContent: "flex-end"
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 10
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white"
  },
  content: {
    paddingHorizontal: 20
  },
  divider: {
    marginVertical: 10,
    backgroundColor: "#8CAFC5"
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: "#A7BBC7",
    textAlign: "center"
  },
  ticketButton: {
    marginTop: 20,
    backgroundColor: "#F77E32",
    marginBottom: 20
  },
  timeAndPlace: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: "center"
  }
});
