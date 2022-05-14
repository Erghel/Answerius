import { defineConfig } from 'vite';
const { resolve } = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Answerius/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        page_extensions: resolve(__dirname, './extensions.html'),
      },
    },
  },
});
