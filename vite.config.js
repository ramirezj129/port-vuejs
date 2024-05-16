import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('/src', import.meta.url))
    }
  },
  // Add dotenv plugin configuration
  envDir: './', // The directory of your .env file
  dotenv: true // Enable dotenv plugin
})
