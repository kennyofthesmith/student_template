// @ts-check
/** @type {import('@docusaurus/types').Config} */
const [owner, repo] = (process.env.GITHUB_REPOSITORY || 'kennyofthesmith/student_template').split('/');
const config = {
  title: '107T Research Series',
  tagline: 'Papers on issues of interest to Isla Vista residents',
  favicon: 'img/zombie.svg',

  future: {},

  url: 'https://kennyofthesmith.github.io',
  baseUrl: '/student_template/',
  organizationName: 'kennyofthesmith',
  projectName: 'student_template',
  trailingSlash: false,
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'paper',
          sidebarPath: './sidebars.js',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/zombie.svg',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '107T White Paper Series',
        logo: {
          alt: 'Series mark',
          src: 'img/zombie.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Table of Contents',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

export default config;
