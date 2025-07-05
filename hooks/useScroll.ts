import { create } from "zustand";

interface ScrollState {
  isScrollAllowed: boolean;
  allowScroll: () => void;
}

export const useScroll = create<ScrollState>((set) => ({
  isScrollAllowed: true,
  allowScroll: () => set({ isScrollAllowed: false }),
}));
