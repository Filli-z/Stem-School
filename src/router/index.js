import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/alumni',
      name: 'alumni',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Alumini.vue')
    },
    {
      path: '/footer',
      name: 'footer',
      component: () => import('../components/footerss.vue')
    },
    {
      path:'/timeline',
      name: 'timeline',
      component: () => import('../components/TimeLine.vue')
    },
    {
      path:'/gallery',
      name: 'gallery',
      component: () => import('../components/Gallery.vue')
    },
  ]
})

export default router
