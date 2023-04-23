import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/test-task-goit/",
  plugins: [react()],
  // server: {
  //   open: './',
  //   port: 8888,
  // },
  // preview: {
  //   open: './',
  //   port: 8080,
  // },
})
