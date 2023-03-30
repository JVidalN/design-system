import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default (defineConfig as any)({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    outDir: "dist",
    lib: {
      entry: "src/index.ts",
      name: "design-system",
      formats: ["es", "cjs"],
      fileName: (ext) => `design-system.${ext}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "react",
          "react-dom": "ReactDOM",
        },
      },
    },
    target: "es6",
  },
});
