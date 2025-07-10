import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/portofolio-react/", // ← WAJIB SESUAI dengan nama repo kamu!
	plugins: [react()],
})
