import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "VigilSquad Docs",
  tagline: "Build AI-powered customer agents",
  favicon: "img/favicon.ico",
  url: "https://docs.vigilsquad.com",
  baseUrl: "/",
  organizationName: "nutek-devs",
  projectName: "vigilsquad-docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-BR", "es"],
    localeConfigs: {
      en: { label: "English", htmlLang: "en-US" },
      "pt-BR": { label: "Portugues (Brasil)", htmlLang: "pt-BR" },
      es: { label: "Espanol", htmlLang: "es" },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          docItemComponent: "@theme/ApiItem",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api",
        docsPluginId: "default",
        config: {
          vigilsquad: {
            specPath: "static/openapi.json",
            outputDir: "docs/api",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
    function webpackPolyfillPlugin() {
      return {
        name: "webpack-polyfill-plugin",
        configureWebpack() {
          return {
            resolve: {
              fallback: {
                path: require.resolve("path-browserify"),
              },
            },
          };
        },
      };
    },
  ],

  themes: ["docusaurus-theme-openapi-docs"],

  themeConfig: {
    image: "img/social-card.png",
    navbar: {
      title: "VigilSquad",
      logo: {
        alt: "VigilSquad Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "getting-started",
          position: "left",
          label: "Guides",
        },
        {
          to: "/api",
          label: "API Reference",
          position: "left",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/nutek-devs/vigilsquad",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            { label: "Getting Started", to: "/" },
            { label: "API Reference", to: "/api" },
          ],
        },
        {
          title: "Product",
          items: [
            { label: "Dashboard", href: "https://app.vigilsquad.com" },
            { label: "Status", href: "https://status.vigilsquad.com" },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/nutek-devs/vigilsquad",
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Nutek Devs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "json", "typescript"],
    },
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
  },
};

export default config;
