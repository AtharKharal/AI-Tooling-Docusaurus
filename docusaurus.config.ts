import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "AI Tooling Hub",
  tagline: "A Docusaurus site developed by Athar Kharal, PhD",
  favicon: "img/favicon.ico",

  future: { v4: true },

  url: "http://localhost:3000",
  baseUrl: "/",

  organizationName: "AtharKharal",
  projectName: "ai-tooling-docs-hub",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/AtharKHaral/ai-tooling-docs-hub/edit/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ["rss", "atom"], xslt: true },
          editUrl:
            "https://github.com/AtharKHaral/ai-tooling-docs-hub/edit/main/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: { customCss: "./src/css/custom.css" },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/social-card-ai-tooling.png",
    metadata: [
      {
        name: "keywords",
        content: "AI tooling, DocOps, developer workflows, automation",
      },
      { name: "author", content: "Athar Kharal, PhD" },
    ],
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "AI Tooling",
      logo: { alt: "AI Tooling Logo", src: "img/logo.svg" },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/AtharKharal/ai-tooling-docs-hub",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [{ label: "Overview", to: "/" }],
        },
        {
          title: "Connect",
          items: [
            { label: "Portfolio", href: "https://athar-techwriter.vercel.app" },
            {
              label: "WhatsApp",
              href: "https://wa.me/923001234567?text=Hello%2C%20Dr.%20Athar",
            },
            { label: "X / Twitter", href: "https://x.com/atharkharal" },
          ],
        },
        {
          title: "More",
          items: [
            { label: "Blog", to: "/blog" },
            { label: "GitHub Profile", href: "https://github.com/AtharKHaral" },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Athar Kharal, PhD — Built with Docusaurus`,
    },
    prism: {
      // Use a distinctive combo — hardly anyone uses these together
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "json", "python", "typescript"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
