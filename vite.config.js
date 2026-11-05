import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ command }) => ({
  plugins: [
    vue(),
    ...(command === 'serve' ? [vueDevTools()] : []),
  ],

  base: '/portfolio/',

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return

          if (id.includes('leaflet')) return 'leaflet'
          if (id.includes('bootstrap')) return 'bootstrap'
          if (id.includes('@fortawesome')) return 'icons'
          if (id.includes('@vueuse/motion')) return 'motion'
          if (id.includes('vue') || id.includes('pinia')) return 'vue-vendor'
        },
      },
    },
  },
}))
