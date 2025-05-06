import { create } from "zustand";
import { IUserData } from "../types/IUserData";

interface UserStore {
  userData: IUserData | null;
  setUserData: (data: IUserData) => void;
  clearUserData: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userData: null,
  setUserData: (data) => set({ userData: data }),
  clearUserData: () => set({ userData: null })
}));
