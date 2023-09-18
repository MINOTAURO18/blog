import { defineConfig } from "astro/config";


// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true,
  },
  site: "https://MINOTAURO18.github.io",
  base: "/blog",
});