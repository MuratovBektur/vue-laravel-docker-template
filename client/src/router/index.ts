import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/form-list',
      name: 'test',
      component: () => import('@/pages/form-list.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/pages/not-found.vue')
    }
  ]
})

export default router
