import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: [
      'localhost',
      'fc93-49-207-194-3.ngrok-free.app'  // This will allow all ngrok-free.app subdomains
    ]
  }
}) 