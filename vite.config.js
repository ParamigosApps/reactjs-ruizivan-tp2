import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Restart from 'vite-plugin-restart'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Restart({
      restart: ['src/**/*.jsx', 'src/**/*.js', 'vite.config.js'],
    }),
  ],
  server: {
    open: true, // abre el navegador
    browser: 'C:/Program Files/Google/Chrome/Application/chrome.exe'
  },
})
