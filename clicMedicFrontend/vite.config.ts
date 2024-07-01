import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
    open: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    // setupFiles: path.resolve(__dirname, 'src/setUp.jsx'),
    env: {
      IS_REACT_ACT_ENVIRONMENT: 'true',
    },
  },
  resolve: {
    alias: [
      { find: '@clicKMedic', replacement: path.resolve(__dirname, 'src') },
    ],
  },
});
