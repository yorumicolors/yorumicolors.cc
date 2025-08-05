import { browser } from "$app/environment";
import { writable } from "svelte/store";

export type ThemeType = "abyss" | "shade" | "kraken" | "mist";
export const themeStore = writable<ThemeType>("abyss");

const validThemes = new Set<ThemeType>(["abyss", "shade", "kraken", "mist"]);

if (browser) {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme && validThemes.has(storedTheme as ThemeType)) {
    themeStore.set(storedTheme as ThemeType);
  } else {
    themeStore.set("abyss");
  }

  themeStore.subscribe((value) => {
    localStorage.setItem("theme", value);
    document.documentElement.setAttribute("data-theme", value);
  });
}
