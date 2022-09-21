import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomeTabs from '../components/HomeTabs';
import BetTabs from '../components/BetTabs';


const routes = [
  {
    path: '/',
    redirect: '/home/sumary',
  },
  {
    path: '/home/',
    component: HomeTabs,
    children: [
      {
        path: '',
        redirect: '/home/sumary',
      },
      {
        path: 'sumary',
        component: () => import('@/views/SumaryPage.vue'),
      },
      {
        path: 'scoreboard',
        component: () => import('@/views/BoardPage.vue'),
      },
    ],
  },
  {
    path: '/bet/',
    component: BetTabs,
    children: [
      {
        path: '',
        redirect: '/bet/group',
      },
      {
        path: 'group',
        component: () => import('@/views/GroupPage.vue'),
      },
      {
        path: 'playoff',
        component: () => import('@/views/PlayoffPage.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
