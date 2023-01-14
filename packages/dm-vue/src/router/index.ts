import { createRouter, createWebHistory } from 'vue-router'
import { PageName } from '@/schema/PageName'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: PageName.Home,
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/explore',
      name: PageName.Explore,
      component: () => import('@/views/ExploreView.vue'),
    },
    {
      path: '/explore/:id',
      name: PageName.ExploreDetail,
      component: () => import('@/views/ExploreDetail.vue'),
    },
    {
      path: '/user/:id',
      name: PageName.User,
      component: () => import('@/views/UserDetail.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
