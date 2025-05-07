import { create } from "zustand";
import * as Location from "expo-location";

interface ILocationState {
  location: Location.LocationObject | null;
  city: string | null;
  setLocation: (loc: Location.LocationObject) => void;
  setCity: (city: string) => void;
}

export const useLocationStore = create<ILocationState>((set) => ({
  location: null,
  city: null,
  setLocation: (location) => set({ location }),
  setCity: (city) => set({ city })
}));
