import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "src/assets/styles/_typography.scss";
          @import "src/assets/styles/_mixins.scss";
          @import "src/assets/styles/_variables.scss";
          @import "src/assets/styles/_media.scss";
        `,
      },
    },
  },
});
