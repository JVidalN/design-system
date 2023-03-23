import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';
import { dependencies } from './package.json';

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
      entry: 'src/index.ts',
      name: 'design-system',
      formats: ['es', 'cjs'],
      fileName: (ext) => `design-system.${ext}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(dependencies)],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'ReactDOM',
        },
      },
    },
    target: 'esnext',
    sourcemap: true
  },
})
