import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	site: 'https://Arrow007.github.io',
	base: '/WDN/',
	integrations: [svelte()],
	output: 'static',
	markdown: {
		shikiConfig: {
			// https://github.com/shikijs/shiki/blob/main/docs/themes.md
			theme: 'dracula',
		},
	},
});
