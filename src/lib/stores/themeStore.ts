import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type ThemeType = 'system' | 'light' | 'dark';
export const themeStore = writable<ThemeType>('system');

if (browser) {
	themeStore.set((localStorage.getItem('theme') as ThemeType) || 'system');
	themeStore.subscribe((value) => {
		localStorage.setItem('theme', value);
		if (value === 'system') {
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light';
			document.documentElement.setAttribute('data-theme', systemTheme);
		} else {
			document.documentElement.setAttribute('data-theme', value);
		}
	});
}
