// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";
import starlightGiscus from "starlight-giscus";
// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightGiscus({
          repo: "ryan-tutorships/blog",
          repoId: "R_kgDOSR7oPQ",
          category: "General",
          categoryId: "DIC_kwDOSR7oPc4C9NcC",
          reactions: true,
          mapping: "pathname",
          inputPosition: "top",
        }),
      ],
      title: "Lab Pós Mobile",
      defaultLocale: "pt-BR",
      social: [
        {
          icon: "github",
          href: "https://github.com/ryan-tutorships/blog",
          label: "GitHub",
        },
      ],
      components: {
        Head: "./src/components/Head.astro",
        PageTitle: "./src/components/PageTitle.astro",
      },
      customCss: ["./src/styles/global.css"],
      sidebar: [
        {
          label: "Projetos dos Alunos",
          autogenerate: { directory: "projects" },
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
