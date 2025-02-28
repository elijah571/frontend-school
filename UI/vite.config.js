import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}, // Avoid exposing all env variables
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://school-backend-umg3.onrender.com',
        changeOrigin: true,
        secure: true, // Set to true for HTTPS
      },
    },
  },
  preview: {
    allowedHosts: ['school-dashboard-d9bk.onrender.com'],
  },
});
