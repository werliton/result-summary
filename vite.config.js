/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tailwindcss  from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(), svgr({
    exportAsDefault: false, // ⬅️ necessário pra usar `ReactComponent`
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ⬅️ alias para a pasta src
    },
  },
})
