import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	base: 'https://st1llsane.github.io/game-store-v2/',
  plugins: [react()],
})
