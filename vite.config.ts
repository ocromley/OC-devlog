import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // This tells Vite: "If a request starts with /api, 
      // secretly send it to our Express server on port 4000"
      '/api': 'http://localhost:4000',
    },
  },
})