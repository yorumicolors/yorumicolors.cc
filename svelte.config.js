import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess(), mdsvex()],
  kit: {
    adapter: adapter({
      runtime: "nodejs22.x",
    }),
  },
  extensions: [".svelte", ".svx"],
};

export default config;
