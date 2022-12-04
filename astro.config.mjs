import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [
    mdx(),
    preact(),
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
  ]
});
