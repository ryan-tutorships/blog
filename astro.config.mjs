// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Tutoria UTFPR",
      defaultLocale: "pt-BR",
      social: [],
      customCss: ["./src/styles/global.css"],
      sidebar: [
        {
          label: "Leaderboard",
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
