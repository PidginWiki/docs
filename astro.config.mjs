// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.pidgin.wiki',
	integrations: [
		starlight({
			title: 'pidgin.wiki',
			description:
				'Documentation for the Pidgin Wiki project: tooling and a translation model for West African Pidgin English.',
			logo: { src: './src/assets/icon.svg', alt: 'pidgin.wiki' },
			favicon: '/favicon.svg',
			customCss: ['./src/styles/custom.css'],
			components: {
				SiteTitle: './src/components/Logo.astro',
			},
			head: [
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' } },
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&family=Roboto:wght@400;500;700&display=swap',
					},
				},
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/PidginWiki' },
			],
			editLink: {
				baseUrl: 'https://github.com/PidginWiki/docs/edit/master/',
			},
			lastUpdated: true,
			sidebar: [
				{ label: 'Introduction', slug: 'introduction' },
				{
					label: 'Architecture',
					items: [
						{ label: 'Overview', slug: 'architecture/overview' },
						{ label: 'Bandolo', slug: 'architecture/bandolo' },
						{ label: 'Pidgin.Wiki', slug: 'architecture/pidgin-wiki' },
					],
				},
				{ label: 'Requirements (SRS)', slug: 'project/srs' },
				{ label: 'Contribution guide', slug: 'contribute' },
			],
		}),
	],
});
