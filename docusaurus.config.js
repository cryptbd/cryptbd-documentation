// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CryptBD',
  tagline: 'Sistema web para el Análisis Exploratorio de Datos en el mercado de las criptomonedas mediante la aplicación de Ciencia de Datos',
  favicon: 'img/Stonks.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'cryptbd', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es','en'],
    localeConfigs: {
      es: {
        label: 'Español',
      },
      en: {
        label: 'English',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'CryptBD',
        logo: {
          alt: 'My Site Logo',
          src: 'img/Stonks.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            logo: {
              alt: 'My Site Logo',
              src: 'img/CryptBD.png',
            },
            label: 'Documentación',
          },
          {
            href: 'https://www.linkedin.com/in/tomas-becher/',
            label: 'Tomás Becher ',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'left'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Python',
          },
          {
            title: 'JavaScript',
          },
          {
            title: 'HTML',
          },
          {
            title: 'CSS',
          },
          {
            title: 'SQL Server',
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CryptBD. &nbsp;  &nbsp;    &nbsp; <a href="https://www.linkedin.com/in/tomas-becher/" target="_blank" rel="noopener noreferrer">Tomás Becher</a> &nbsp;  &nbsp;    &nbsp; <a href="https://www.linkedin.com/in/matias-agustin-dieguez-69ab081b2/" target="_blank" rel="noopener noreferrer">Matías Agustín Dieguez</a>`,
      },
      plugins: [
        function myPlugin() {
          return {
            name: 'my-plugin',
            configureWebpack(config, isServer) {
              // Remueve o ajusta el plugin css-minimizer-webpack-plugin
              const { CssMinimizerPlugin } = require('css-minimizer-webpack-plugin');
              config.optimization.minimizer = config.optimization.minimizer.filter(
                (plugin) => !(plugin instanceof CssMinimizerPlugin)
              );
              return config;
            },
          };
        },
      ],
    }),
};

export default config;

