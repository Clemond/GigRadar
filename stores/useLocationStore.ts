import { create } from "zustand";
import * as Location from "expo-location";

interface LocationState {
  location: Location.LocationObject | null;
  city: string | null;
  setLocation: (loc: Location.LocationObject) => void;
  setCity: (city: string) => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  location: null,
  city: null,
  setLocation: (location) => set({ location }),
  setCity: (city) => set({ city })
}));
