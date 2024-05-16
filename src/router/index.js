import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import PortfolioView from '../views/PortfolioView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component:AboutView
      
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component:PortfolioView
      
    },
    {
      path: '/blog',
      name: 'blog',
      component:BlogView
      
    }
  ]
})

export default router
