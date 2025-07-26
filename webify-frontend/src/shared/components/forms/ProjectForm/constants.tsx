import type { SimplePalette } from "./PaletteSelector";

export const LANGUAGES = [
  { label: "English", value: "en" },
  { label: "Hindi", value: "hi" },
  { label: "Spanish", value: "es" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
];


export const TEMPLATES = [
  "Course Selling",
  "Product Store",
  "Portfolio",
  "Blog",
  "Event",
];


export const DEFAULT_PALETTES: SimplePalette[] = [
  {
    name: "Ocean",
    colors: {
      primary: "#0ea5e9",
      secondary: "#38bdf8",
      accent: "#06b6d4",
      background: "#e0f2fe",
      foreground: "#0c4a6e",
    },
  },
  {
    name: "Sunset",
    colors: {
      primary: "#f97316",
      secondary: "#fb923c",
      accent: "#facc15",
      background: "#fff7ed",
      foreground: "#7c2d12",
    },
  },
  {
    name: "Forest",
    colors: {
      primary: "#22c55e",
      secondary: "#4ade80",
      accent: "#84cc16",
      background: "#dcfce7",
      foreground: "#064e3b",
    },
  },
];

