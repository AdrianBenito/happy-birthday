import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			'@assets/*': './src/assets/*'
		},
		paths: {
			base: dev ? '' : '/happy-birthday'
		},
		prerender: {
			entries: ['*']
		}
	}
};

export default config;
