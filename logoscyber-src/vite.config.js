import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/jp/',
  build: {
    outDir: resolve(__dirname, '../logoscyber/jp'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  }
})
