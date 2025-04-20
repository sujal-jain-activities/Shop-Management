import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// Workaround to get __dirname in ES Modules
const __dirname = path.dirname(new URL(import.meta.url).pathname)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // This should point to the src folder
    },
  },
})
