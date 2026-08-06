// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Spacescan Docs',
  tagline: 'Guides, API reference and updates for the Chia blockchain explorer',
  url: 'https://docs.spacescan.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/spacescan-logo.png',
  organizationName: 'Spacescan.io',
  projectName: 'Spacescan.io',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/spacescan-io/docs/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
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

  // Inter is the Spacescan brand font (see spacescan-web globals.css).
  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
  ],

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
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
    // Feeds the homepage "From the blog" strip at build time.
    ['./plugins/latest-posts', {blogDir: 'blog', count: 3}],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/spacescan-logo.png',
      metadata: [
        {name: 'og:image', content: 'https://docs.spacescan.io/img/spacescan-logo.png'},
        {name: 'twitter:image', content: 'https://docs.spacescan.io/img/spacescan-logo.png'},
        {name: 'twitter:card', content: 'summary_large_image'},
      ],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,
        },
      },
      // Rest of your existing navbar config
      navbar: {
        hideOnScroll: true,
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
            label: 'Guides',
          },
          {
            to: '/api/getting-started',
            position: 'left',
            label: 'API',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'dropdown',
            label: 'Products',
            position: 'right',
            items: [
              {
                label: 'Explorer — spacescan.io',
                href: 'https://www.spacescan.io/',
              },
              {
                label: 'Wallets + Tax',
                href: 'https://wallets.spacescan.io',
              },
              {
                label: 'Intel',
                href: 'https://intel.spacescan.io',
              },
              {
                label: 'Developer API plans',
                href: 'https://www.spacescan.io/apis',
              },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/spacescan-io',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Documentation',
            items: [
              {label: 'Guides', to: '/docs/intro'},
              {label: 'Wallet security', to: '/docs/guide/wallet_security/cold_wallet_alerts'},
              {label: 'API quick start', to: '/api/getting-started'},
              {label: 'Blog', to: '/blog'},
            ],
          },
          {
            title: 'Products',
            items: [
              {label: 'Explorer', href: 'https://www.spacescan.io/'},
              {label: 'Wallets + Tax', href: 'https://wallets.spacescan.io'},
              {label: 'Intel', href: 'https://intel.spacescan.io'},
              {label: 'API plans', href: 'https://www.spacescan.io/apis'},
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'Discord', href: 'https://discord.gg/Bb4sj3Bg9P'},
              {label: 'Twitter', href: 'https://twitter.com/spacescan_io'},
              {label: 'GitHub', href: 'https://github.com/spacescan-io'},
              {label: 'Contact us', href: 'https://www.spacescan.io/contact-us'},
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Spacescan Ltd · Chia blockchain explorer`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java', 'php', 'bash', 'json', 'scss'],
      },
    }),
};

export default config;
