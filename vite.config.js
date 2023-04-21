import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      base:  "https://Pumpon4yk.github.io/test-task-goit/"
    },
  },
})
