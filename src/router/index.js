import AccountReg from '@/views/accountReg.vue'
import FAQ from '@/views/FAQ.vue'
import MainCatalog from '@/views/mainCatalog.vue'
import MainPage from '@/views/mainPage.vue'
import ProductPage from '@/views/productPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
  {
    path: '/log',
    name: 'log',
    component: AccountReg,
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQ,
  },
  {
    path: '/products',
    name: 'products',
    component: MainCatalog,
  },
  {
    path: '/data',
    name: 'data',
    component: ProductPage,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router