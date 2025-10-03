// stores/useUserStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AUTH_STORAGE_KEY } from "../constants/util";

interface UserState {
  user: any | null;
  token: string | null;
  setUser: (user: any) => void;
  clearUser: () => void;
  setToken: (token: string) => void;
  clearToken: () => void;
}

// persist ensures user + token survive refresh
export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
      setToken: (token) => set({ token }),
      clearToken: () => set({ token: null }),
    }),
    { name: AUTH_STORAGE_KEY } // localStorage key
  )
);
