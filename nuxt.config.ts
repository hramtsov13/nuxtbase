import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const currentDir = dirname(fileURLToPath(import.meta.url));

const isProd = process.env.NODE_ENV;

export default defineNuxtConfig({
	devtools: { enabled: true },

	runtimeConfig: {
		public: {
			apiEndpoint: '',
		},
	},

	app: {
		head: {
			title: 'Nuxt 3 Template',
			titleTemplate: 'Nuxt 3 Template | %s',

			htmlAttrs: {
				lang: 'en',
			},

			meta: [
				{ charset: 'utf-8' },

				{
					hid: 'description',
					name: 'description',
					content: 'Highly perfomant and scalable Nuxt 3 boilerplate',
				},
			],
		},
	},

	css: [join(currentDir, './assets/css/global.css')],

	nitro: {
		compressPublicAssets: {
			gzip: true,
			brotli: true,
		},
		minify: true,
	},

	modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@pinia/nuxt', '@nuxt/eslint', '@unlighthouse/nuxt', '@nuxtjs/seo'],

	shadcn: {
		componentDir: './components/ui',
	},

	// https://nuxtseo.com/
	seo: {
		redirectToCanonicalSiteUrl: true,
	},

	// From @nuxt/seo -> @nuxt/sitemap
	// https://nuxtseo.com/docs/sitemap/getting-started/introduction
	sitemap: {
		sources: ['/api/urls'],
	},

	// From @nuxt/seo -> @nuxt/robots
	//https://nuxtseo.com/docs/robots/getting-started/introduction
	robots: {
		groups: [
			{
				userAgent: '*',
				allow: isProd ? '/' : '',
			},
		],

		cacheControl: '',
		sitemap: '/sitemap.xml',
	},
});
