import { defineConfig } from 'vite';
import VitePress from 'vitepress/plugin';

export default defineConfig({
  plugins: [VitePress()],
  build: {
    outDir: 'docs/.vitepress/dist' // Output directory for VitePress build
  }
});
