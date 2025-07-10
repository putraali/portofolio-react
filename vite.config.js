import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portofolio-react/', // ⬅️ PENTING! Harus sesuai dengan nama repo GitHub kamu
  plugins: [react()],
})
