import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



 export default defineConfig({
  server: {
    proxy: {
      // put target start params example localhost:9000/test 
      '/auth': {
        target: 'http://localhost:9000/',
        changeOrigin: true,
      },
      '/main':{
        target: 'http://localhost:9000/',
        changeOrigin: true,
      },
    }
  },
  plugins: [react()],
})