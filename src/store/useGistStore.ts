import { create } from "zustand";

export type ViewType = "public" | "starred";

interface GistStore {
  viewType: ViewType;
  setViewType: (type: ViewType) => void;
}

export const useGistStore = create<GistStore>((set) => ({
  viewType: "public",
  setViewType: (type) => set({ viewType: type }),
}));
