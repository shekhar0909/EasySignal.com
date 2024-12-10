import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'https://github.com/shekhar0909/EasySignal.com/',
  server:{
    open:true,
    host:true,
  }
})
