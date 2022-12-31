// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hey There👋🏻',
  tagline: 'My name is Matt Herzog and I am a software engineer',
  url: 'https://mattherzog.me',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mherzog4', // Usually your GitHub org/user name.
  projectName: 'Digital Garden', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
      
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs/projects',
            position: 'left',
            label: 'Projects',
            
          },
          {to: '/blog',
           label: 'Blog', 
           position: 'left'
          },
           {to: '/docs/content',
           label: 'Content', 
           position: 'left'
          },
          {
            href: 'https://drive.google.com/file/d/1LvzthROtMG6L7Y2yE6lCREQ1Jz6yKfKw/view?usp=sharing',
            label: 'Resume',
            position: 'right',
          },
        ],
      },
      scripts: [
        'https://twitter.com/MattHerzog5?ref_src=twsrc%5Etfw',
        {
          src:
            'https://platform.twitter.com/widgets.js',
          async: true,
        },
      ],
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Technical Content',
            items: [
              {
                label: 'All of my content',
                to: '/docs/content',
              },
            ],
          },
          {
            title: 'Hire me',
            items: [
              {
                label: "Let's chat",
                href: 'https://calendly.com/mattherzog/business-chat',
              },
              {
                label: "Send me a message",
                href: "mailto:matt@mattherzog.me",
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Testimonials',
                href: 'https://testimonial.to/mattherzog-testimonials/all',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mherzog4',
              },
              {
                label: 'Sponsor me',
                href: 'https://github.com/sponsors/mherzog4',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Made by Matt Herzog🚀, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;