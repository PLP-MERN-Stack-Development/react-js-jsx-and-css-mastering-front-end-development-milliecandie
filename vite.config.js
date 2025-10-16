import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-js-jsx-and-css-mastering-front-end-development-milliecandie/', // 👈 EXACT repo name
})