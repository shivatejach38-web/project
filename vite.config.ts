import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/project/',
  plugins: [react()],
  server: {
    port: 4173,
    host: '0.0.0.0'
  }
});
