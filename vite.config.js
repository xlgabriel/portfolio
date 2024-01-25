import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log('VITE_APP_EMAILJS_SERVICE_ID key is available:', Boolean(process.env.VITE_APP_EMAILJS_SERVICE_ID));
console.log('VITE_APP_EMAILJS_TEMPLATE_ID key is available:', Boolean(process.env.VITE_APP_EMAILJS_TEMPLATE_ID));
console.log('VITE_APP_EMAILJS_PUBLIC_KEY key is available:', Boolean(process.env.VITE_APP_EMAILJS_PUBLIC_KEY));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/"
})
