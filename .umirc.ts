import { defineConfig } from '@umijs/max';
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '校园云系统',
    locale: true,
  },
  routes: [
    {
      path: '/',
      wrappers: ['@/wrappers/auth'],
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      wrappers: ['@/wrappers/auth'],
      component: './Home',
    },
    {
      name: '用户申诉',
      path: '/access',
      component: './Access',
      wrappers: ['@/wrappers/auth'],
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      wrappers: ['@/wrappers/auth'],
      component: './Table',
    },
    {
      path: '/login',
      layout: false,
      component: './Login',
    },
    {
      name: ' 数据',
      path: '/data',
      component: './Data',
    },
  ],
  npmClient: 'npm',
});
