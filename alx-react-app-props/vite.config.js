import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // This option ensures that JSX files are handled correctly
      // Here you can specify how Rollup should handle different file types
    }
  }
});
