import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/portofolio-react/', // ← ini yang sangat penting!
  plugins: [react()],
})