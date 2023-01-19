import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      // if you are using ogl mode, comment out the next line to include it in the bundled file
      external: ["ogl-typescript"],
    },
  },
});
