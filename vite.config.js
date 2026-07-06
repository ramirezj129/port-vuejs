import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // Full build includes the runtime template compiler, required by
      // components that use string `template:` options (e.g. MagicBento).
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  },
  envDir: './',
})
