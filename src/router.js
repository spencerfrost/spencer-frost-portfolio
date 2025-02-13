import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import SpencerPlus from './views/SpencerPlus.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/spencer-plus',
    component: SpencerPlus,
    children: [
      {
        path: 'infrastructure',
        name: 'Infrastructure',
        component: () => import('./components/spencer-plus/Infrastructure.vue'),
      },
      {
        path: 'services',
        name: 'Services',
        component: () => import('./components/spencer-plus/Services.vue'),
      },
      {
        path: 'monitoring',
        name: 'Monitoring',
        component: () => import('./components/spencer-plus/Monitoring.vue'),
      },
      {
        path: 'technical',
        name: 'Technical',
        component: () => import('./components/spencer-plus/Technical.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router