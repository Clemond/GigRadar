import * as Location from "expo-location";
import { useLocationStore } from "../stores/useLocationStore";
import { Alert } from "react-native";

export async function loadUserLocation() {
  const { setLocation, setCity, setCountry } = useLocationStore.getState();

  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    Alert.alert(
      "Location PErmission Denied",
      "We couldn't access your location, Concerts near you may not be shown",
      [{ text: "OK" }]
    );
    return;
  }

  const location = await Location.getCurrentPositionAsync({});
  setLocation(location);

  const reverseGeocoded = await Location.reverseGeocodeAsync(location.coords);
  const city = reverseGeocoded?.[0]?.city ?? "stockholm";
  const country = reverseGeocoded?.[0]?.country ?? "Sweden";
  setCity(city);
  setCountry(country);
}
