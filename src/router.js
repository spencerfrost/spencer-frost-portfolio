import { createRouter, createWebHistory } from 'vue-router'

import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Home from './views/Home.vue'
import Portfolio from './views/Portfolio.vue'

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'portfolio', path: '/portfolio', component: Portfolio },
  { name: 'about', path: '/about', component: About },
  { name: 'contact', path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
