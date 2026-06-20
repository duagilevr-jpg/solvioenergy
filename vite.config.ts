// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages serves this project from /solvioenergy/, so the router basepath
// must match the repo name and routes need to be statically prerendered
// (GitHub Pages cannot run the TanStack Start SSR server).
export default defineConfig({
  vite: {
    base: "/solvioenergy/",
  },
  tanstackStart: {
    router: {
      basepath: "/solvioenergy/",
    },
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
});
