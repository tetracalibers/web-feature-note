// @ts-check

import { defineConfig } from "astro/config";
import { resolve } from "node:path";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
const __dirname = new URL(".", import.meta.url).pathname;

// https://astro.build/config
export default defineConfig( /** @type {import('astro').AstroUserConfig} */
{
  vite: {
    plugins: [],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src")
      }
    }
  },
  integrations: [mdx(), svelte()],
  site: "https://tetracalibers.github.io",
  base: "web-feature-note",
  experimental: {
    contentCollections: true
  },
  markdown: {
    syntaxHighlight: "prism"
  }
});