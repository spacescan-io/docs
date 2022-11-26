// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Spacescan.io Docs',
  tagline: 'Sapcescan- Chia explorer',
  url: 'https://docs.spacescan.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/spacescan-logo.png',
  organizationName: 'Spacescan.io', // Usually your GitHub org/user name.
  projectName: 'Spacescan.io', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/spacescan-io/docs',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        sidebarPath: require.resolve('./apisidebars.js'),
        // ... other options
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },
  themeConfig:
    ({
      navbar: {
        title: 'Spacescan.io',
        logo: {
          alt: 'Spacescan.io',
          src: 'img/spacescan-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          // {
          //   to: 'api/intro',
          //   position: 'left',
          //   label: 'API',
          // },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://www.spacescan.io/',
            label: 'Spacescan.io',
            position: 'left',
          },{
            type: 'dropdown',
            label: 'Community',
            position: 'right',
            // dropdownItemsAfter: [
            //   {
            //     type: 'html',
            //     value: '<hr style="margin: 0.3rem 0;">',
            //   },
            // ],
            items: [
              {
                label: 'Twitter', // The link label
                href: 'https://twitter.com/spacescan_io', // The external URL
    
              },
              {
                label: 'Discord', // The link label
                href: 'https://discord.gg/Bb4sj3Bg9P', // The external URL
    
              },
              
              // ... more items
            ],
          },{
            type: 'localeDropdown',
            position: 'right',
            // dropdownItemsAfter: [
            //   {
            //     type: 'html',
            //     value: '<hr style="margin: 0.3rem 0.3rem;">',
            //   },
            // ],
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
