import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/3s-food-delivery/',
  plugins: [react()],
  server: {
    host: true
  }
})
