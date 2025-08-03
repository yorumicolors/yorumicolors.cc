import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
  server: {
    allowedHosts: (Bun.env.ALLOWED_HOSTS || "*").split('|')
  }
});
