import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

const frontendRoot = fileURLToPath(
  new URL("./src/weaver/web/frontend", import.meta.url),
);
const buildDirectory = fileURLToPath(
  new URL("./src/weaver/web/dist", import.meta.url),
);

export default defineConfig({
  root: frontendRoot,
  publicDir: "public",
  plugins: [react()],
  build: {
    outDir: buildDirectory,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: "assets/weaver-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.names.some((name) => name.endsWith(".css"))) {
            return "assets/weaver-[hash].css";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  server: {
    host: "127.0.0.1",
    proxy: {
      "/api": "http://127.0.0.1:8000",
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./test/setup.ts",
    css: true,
  },
});
