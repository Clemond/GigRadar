import { create } from "zustand";
import * as Location from "expo-location";

interface ILocationState {
  location: Location.LocationObject | null;
  city: string | null;
  country: string | null;
  countryCode: string | null;
  setLocation: (loc: Location.LocationObject | null) => void;
  setCity: (city: string) => void;
  setCountry: (country: string) => void;
  setCountryCode: (countryCode: string) => void;
  clearLocation: () => void;
}

export const useLocationStore = create<ILocationState>((set) => ({
  location: null,
  city: null,
  country: null,
  countryCode: null,
  setLocation: (location) => set({ location }),
  setCity: (city) => set({ city }),
  setCountry: (country) => set({ country }),
  setCountryCode: (countryCode) => set({ countryCode }),
  clearLocation: () => set({ location: null })
}));
