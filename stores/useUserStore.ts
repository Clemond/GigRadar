import { create } from "zustand";
import { IUserData } from "../types/IUserData";

interface IUserStore {
  userData: IUserData | null;
  setUserData: (data: IUserData) => void;
  clearUserData: () => void;
}

export const useUserStore = create<IUserStore>((set) => ({
  userData: null,
  setUserData: (data) => set({ userData: data }),
  clearUserData: () => set({ userData: null })
}));
