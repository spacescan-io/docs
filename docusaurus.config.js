// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Spacescan.io Docs',
  tagline: 'Spacescan - Chia explorer',
  url: 'https://docs.spacescan.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/spacescan-logo.png',
  organizationName: 'Spacescan.io', // Usually your GitHub org/user name.
  projectName: 'Spacescan.io', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/spacescan-io/docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/spacescan-io/docs/tree/main/blog/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        sidebarPath: './apisidebars.js',
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Navbar config remains the same
      navbar: {
        title: 'Spacescan.io',
        logo: {
          alt: 'Spacescan.io Logo',
          src: 'img/spacescan-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar1',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.spacescan.io/',
            label: 'Spacescan.io',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'Community',
            position: 'right',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/spacescan_io',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/Bb4sj3Bg9P',
              },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            to: '/api/address/balance',
            position: 'left',
            label: 'API',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'API',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/Bb4sj3Bg9P',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/spacescan_io',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/spacescan-io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Spacescan.io`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  themes: ['@docusaurus/theme-live-codeblock'],
};

export default config;
