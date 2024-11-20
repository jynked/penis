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
    name: 'log',
    component: AccountReg,
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQ,
  },
  // Добавим обработку 404
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  // Уберем process.env.BASE_URL, так как это может вызывать проблемы
  history: createWebHistory(),
  routes
})

export default router