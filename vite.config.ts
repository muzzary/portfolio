import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
// NOTE: `base` is intentionally unset for zero-config Vercel/Netlify deploys.
// For GitHub Pages, set base: '/<repo-name>/' and run `npm run deploy`.
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
})
