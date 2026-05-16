// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Lab Pós Mobile",
      defaultLocale: "pt-BR",
      social: [
        {
          icon: "github",
          href: "https://github.com/ryan-tutorships/blog",
          label: "GitHub",
        },
      ],
      customCss: ["./src/styles/global.css"],
      sidebar: [
        {
          label: "Projetos dos Alunos",
          autogenerate: { directory: "projects" },
        },
        {
          label: "Vitrine",
          autogenerate: { directory: "leaderboard" },
        },
        {
          label: "Tutoria",
          autogenerate: { directory: "tutorship" },
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});
