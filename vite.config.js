import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/test-task-goit",
  server: {
    open: './',
    port: 8888,
  },
  preview: {
    open: './',
    port: 8080,
  },
})
