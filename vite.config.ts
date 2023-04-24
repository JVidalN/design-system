import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import path from "path";

// https://vitejs.dev/config/
export default (defineConfig as any)({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "design-system",
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
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts()],
});
