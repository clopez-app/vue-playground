import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
    coverage: {
      provider: 'istanbul',
    },
  },
  plugins: [vue()],
});
