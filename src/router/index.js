import { createRouter, createWebHistory } from '@ionic/vue-router';
import LoginPage from '../views/LoginPage';
import HomeTabs from '../components/HomeTabs';
import BetTabs from '../components/BetTabs';


const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    name: 'login',
    path: '/login/',
    component: LoginPage,
  },
  {
    name: 'home',
    path: '/home/',
    component: HomeTabs,
    children: [
      {
        path: '',
        redirect: '/home/sumary',
      },
      {
        name: 'sumary',
        path: 'sumary',
        component: () => import('@/views/SumaryPage.vue'),
      },
      {
        name: 'scoreboard',
        path: 'scoreboard',
        component: () => import('@/views/BoardPage.vue'),
      },
    ],
  },
  {
    name: 'bet',
    path: '/bet/',
    component: BetTabs,
    children: [
      {
        path: '',
        redirect: '/bet/group',
      },
      {
        name: 'group',
        path: 'group',
        component: () => import('@/views/GroupPage.vue'),
      },
      {
        name: 'playoff',
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
