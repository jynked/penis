import AccountReg from '@/views/accountReg.vue'
import FAQ from '@/views/FAQ.vue'
import MainPage from '@/views/mainPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
  {
    path: '/log',
    component: AccountReg,
  },
  {
    path: '/faq',
    component: FAQ,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router