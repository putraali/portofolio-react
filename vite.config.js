// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portofolio-react/', // 👈 ini WAJIB disesuaikan dengan nama repo
  plugins: [react()],
})
