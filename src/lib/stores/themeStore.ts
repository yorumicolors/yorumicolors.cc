import { browser } from "$app/environment";
import { writable } from "svelte/store";

export type ThemeType = "abyss" | "shade" | "kraken" | "mist";
export const themeStore = writable<ThemeType>("abyss");

if (browser) {
  themeStore.set((localStorage.getItem("theme") as ThemeType) || "abyss");
  themeStore.subscribe((value) => {
    localStorage.setItem("theme", value);
    document.documentElement.setAttribute("data-theme", value);
  });
}
