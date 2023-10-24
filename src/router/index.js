import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DownloadView from '../views/DownloadView.vue'
import NftsView from '../views/NftsView.vue'
import RankView from '../views/RankView.vue'
import NewsletterView from '../views/NewsletterView.vue'
import FaqView from '../views/FaqView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/download',
    name: 'download',
    component: DownloadView
  },
  {
    path: '/nfts',
    name: 'nfts',
    component: NftsView
  },
  {
    path: '/rank',
    name: 'rank',
    component: RankView
  },
  {
    path: '/newsletter',
    name: 'newsletter',
    component: NewsletterView
  },
  {
    path: '/faq',
    name: 'faq',
    component: FaqView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
