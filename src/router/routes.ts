import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    name: 'goods',
    path: '/goods',
    component: () => import('@/views/goods/index.vue'),
  },
  {
    name: 'management',
    path: '/management',
    redirect: '/management/user',
    children: [
      {
        path: '/management/user',
        component: () => import('@/views/user/index.vue'),
      },
    ],
  },
];
