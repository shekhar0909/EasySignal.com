import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/EasySignal.com/',
  server:{
    open:true,
    host:true,
  }
})
