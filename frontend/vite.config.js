import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //lets create a proxy because we are using just the relative path
  server:{
    proxy:{
      '/api': {
        target: 'http://localhost:5000',  //pointinf to backedn
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
