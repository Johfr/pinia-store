import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DefaultLayout from '../layouts/default.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        navbar: true,
        layout: DefaultLayout
      }
    },
    {
      path: '/option',
      name: 'option-store',
      component: () => import('../views/OptionStore.vue'),
      meta: {
        navbar: true,
        layout: DefaultLayout
      }
    },
    {
      path: '/setup',
      name: 'setup-store',
      component: () => import('../views/SetupStore.vue'),
      meta: {
        navbar: true,
        layout: DefaultLayout
      }
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/Products.vue'),
      children: [{
        path: ":id",
        name: "product",
        component: () => import('../views/Products.vue'),
        meta: {
          navbar: false,
        },
      }],
      meta: {
        navbar: true,
        layout: DefaultLayout
      },
      props: true,
    },
  ]
})

export default router
