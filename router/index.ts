import {
  createWebHistory,
  createRouter,
  RouteRecordRaw,
} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/', name: 'Home', component: () => import('@containers/page/main/index.vue'),
  },
  {
    path: '/lounge', name: 'Lounge', component: () => import('@containers/page/lounge/index.vue'),
  },
  {
    path: '/lab/?tab=all', name: 'Lounge', component: () => import('@containers/page/lab/index.vue'),
  },
  {
    path: '/mypage/?tab=pop', name: 'Lounge', component: () => import('@containers/page/mypage/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to: any, from: any, savedPosition: any): any {
    return savedPosition || {
      top: 0,
    };
  },
});

export default router;
