import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/home',
    component:() => import('@/views/home/index.vue')
  },
  {
    name: 'management',
    path: '/management',
  
    redirect:'/management/user',
    children:[
      {
        path:'/management/user',
        component:() => import('@/views/user/index.vue'),
      }
    ]
  }
];