import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import typescript from "@rollup/plugin-typescript";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: false,
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ui",
      fileName: (format) => `ui.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
      plugins: [
        typescript({
          target: "es5",
          rootDir: path.resolve(__dirname, "./src"),
          declaration: true,
          declarationDir: path.resolve(__dirname, "./dist"),
          exclude: path.resolve(__dirname, "./node_modules/**"),
          allowSyntheticDefaultImports: true,
        }),
      ],
    },
  },
});
