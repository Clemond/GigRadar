import * as Calendar from "expo-calendar";
import { ITicketmasterEvent } from "../types/ITicketmasterEvent";
import { Alert } from "react-native";

export async function addConcertToCalendar(concert: ITicketmasterEvent) {
  const { status } = await Calendar.requestCalendarPermissionsAsync();
  if (status !== "granted") {
    Alert.alert("Error", "Permission to access calendar was denied");
    return;
  }

  const calendars = await Calendar.getCalendarsAsync(
    Calendar.EntityTypes.EVENT
  );
  const defaultCalendar = calendars.find((cal) => cal.allowsModifications);

  if (!defaultCalendar) {
    alert("No calendar found.");
    return;
  }

  const startDate = new Date(
    `${concert.dates.start.localDate}T${
      concert.dates.start.localTime ?? "12:00"
    }`
  );
  const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000);

  await Calendar.createEventAsync(defaultCalendar.id, {
    title: concert.name,
    startDate,
    endDate,
    timeZone: "local",
    location: concert._embedded?.venues?.[0]?.name,
    notes: "Event added from GigRadar. Check ticket site for more details."
  });

  Alert.alert("Success!", "Concert added to your calendar!");
}
