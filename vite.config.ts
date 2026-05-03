import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path handling:
// - For Cloudflare Pages: keep base as '/'
// - For GitHub Pages user/org site (username.github.io): keep base as '/'
// - For GitHub Pages project site: change base to '/repo-name/'
//   You can also set this via env: VITE_BASE=/repo-name/ npm run build
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
