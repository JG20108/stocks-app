import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; 
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [react(), VitePWA({ /* options */ })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@atoms": path.resolve(__dirname, "./src/components/atoms"),
      "@molecules": path.resolve(__dirname, "./src/components/molecules"),
      "@organisms": path.resolve(__dirname, "./src/components/organisms"),
      "@templates": path.resolve(__dirname, "./src/components/templates"),
      "@pages": path.resolve(__dirname, "./src/components/pages"),
    },
  },
});
