import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}, // Avoid exposing all env variables, use import.meta.env instead
  },
  preview: {
    allowedHosts: ['school-dashboard-d9bk.onrender.com'],
  },
});
