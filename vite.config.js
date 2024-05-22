import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/portfolio/",
    plugins: [react()],
    build: {
        outDir: "dist",
    },
    server: {
        host: true,
        port: 3000,
    },
});
