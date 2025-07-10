// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/portofolio-react/", // ← sesuai nama repo kamu
	plugins: [react()],
});