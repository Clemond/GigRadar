import { create } from "zustand";

interface ICurrentScreen {
  currentScreen: string;
  setCurrentScreen: (screen: string) => void;
  resetCurrentScreen: () => void;
}

export const UseCurrentScreenStore = create<ICurrentScreen>((set) => ({
  currentScreen: "home",
  setCurrentScreen: (screen) => set({ currentScreen: screen }),
  resetCurrentScreen: () => set({ currentScreen: "home" })
}));
