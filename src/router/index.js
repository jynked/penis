import AccountReg from '@/views/accountReg.vue'
import FAQ from '@/views/FAQ.vue'
import MainPage from '@/views/mainPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router