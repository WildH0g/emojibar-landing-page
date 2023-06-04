import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [],
  build: {
    minify: true,
    outDir: resolve(__dirname, 'dist/'),
  },
});
