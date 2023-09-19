import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  viewTransitions: true,
  output: "server",
  adapter: vercel()
});