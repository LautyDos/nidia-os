import { create } from "zustand";
import type { Window } from "./types";

type WindowStore = {
  windows: Window[];
  openWindow: (window: Window) => void;
  closeWindow: (id: string) => void;
};

export const useWindowStore = create<WindowStore>((set) => ({
  windows: [],
  openWindow: (window) =>
    set((state) => ({
      windows: [...state.windows, window],
    })),
  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
    })),
}));
