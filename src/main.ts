import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

import App from './App.vue'
import '@/assets/css/index.css'
import '@/assets/css/fonts.css'
import '@/assets/css/base.css'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(createPinia())

app.use(router)

app.mount('#app')
