// @ts-check

import { defineConfig } from "astro/config"
import { resolve } from "node:path"
import mdx from "@astrojs/mdx"
const __dirname = new URL(".", import.meta.url).pathname

export default defineConfig(
  /** @type {import('astro').AstroUserConfig} */
  {
    vite: {
      plugins: [],
      resolve: {
        alias: {
          "@": resolve(__dirname, "src"),
        },
      },
    },
    integrations: [mdx()],
    site: "https://tetracalibers.github.io",
    base: "/repo-name",
    experimental: {
      contentCollections: true,
    },
  },
)
