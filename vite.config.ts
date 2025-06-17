import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'Content-Security-Policy': "frame-ancestors 'self' https://appkit-farcaster-mini-app.vercel.app/ http://localhost:* https://*.pages.dev https://*.vercel.app https://*.ngrok-free.app https://secure-mobile.walletconnect.com https://secure-mobile.walletconnect.org"
    }
  }
})
