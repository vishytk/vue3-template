import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue(), Pages(), Layouts()],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@': `${path.resolve(__dirname, 'src')}/`,
    },
  },
})
