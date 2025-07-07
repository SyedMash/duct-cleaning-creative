import { create } from "zustand";

interface LoaderState {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useGlobalLoader = create<LoaderState>((set) => ({
  isLoading: true,
  setLoading: (loading: boolean) => set({ isLoading: loading }),
}));
