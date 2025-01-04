// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env, // Optionally make process.env available
  },
});
