/*
 * @Author       : Eug
 * @Date         : 2022-04-14 14:32:52
 * @LastEditTime : 2022-04-14 18:36:42
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /tauri-app/src/router/index.ts
 */
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path:'/',
    name:'layout',
    component:() => import('/@/layout/index.vue'),
    redirect: 'dashboard-page',
    children:[
      {
        path: 'dashboard-page',
        name: 'dashboard-page',
        meta: { keepAlive: true },
        component: () => import('/@/views/dashboard-page/index.vue')
      },
      {
        path: 'developer-page',
        name: 'developer-page',
        meta: { keepAlive: true },
        component: () => import('/@/views/developer-page/index.vue')
      },
      {
        path: 'clipboard-page',
        name: 'clipboard-page',
        meta: { keepAlive: true },
        component: () => import('/@/views/clipboard-page/index.vue')
      },
      {
        path: 'dialog-page',
        name: 'dialog-page',
        meta: { keepAlive: true },
        component: () => import('/@/views/dialog-page/index.vue')
      },
      {
        path: 'event-page',
        name: 'event-page',
        meta: { keepAlive: true },
        component: () => import('/@/views/event-page/index.vue')
      },
      {
        path: 'fs-page',
        name: 'fs-page',
        meta: { keepAlive: true },
        component: () => import('/@/views/fs-page/index.vue')
      }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router