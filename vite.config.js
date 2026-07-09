import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path matches the GitHub Pages repository name.
// Change '/portfolio/' to your actual repo name before deploying,
// or leave as '/' if deploying to a mohammadchand997.github.io root repo.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
