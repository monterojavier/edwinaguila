import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: "/edwinaguila/", // Need this for GitHub Pages since it's hosted at /edwinaguila/
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
