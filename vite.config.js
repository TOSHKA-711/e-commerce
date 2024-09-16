import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Set the base URL for your project
  base: '/',  // Replace with your actual subdirectory or repo name
})