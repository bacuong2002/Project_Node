import { Data } from "src/types/data";

export const NAME_COMMON_SLICE = "STORE_COMMON";
export const LIST_THEME: Data.Theme[] = [
  { id: "light", name: "light" },
  { id: "dark", name: "dark" },
  { id: "oled", name: "oled" }
];
export const LIST_LANGUAGES: Data.Language[] = [
  { id: "vi", name: "Vietnamese", image: "" },
  { id: "en", name: "English", image: "" }
];
