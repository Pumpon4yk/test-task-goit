import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    open: './index.html',
    port: 8888,
  },
  preview: {
    open: './index.html',
    port: 8080,
  },
})
