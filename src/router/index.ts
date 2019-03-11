import Vue from 'vue';
import Router from 'vue-router';
import BaseLayout from '@/views/base/layout/Layout.vue';

import { tabRoutersConf } from './tabRoutersConf';
import {catchRoute, matchTabRoutes} from '@/router/utils';

Vue.use(Router);

const lazyRoutes: any = {
  Home: () => import(/* webpackChunkName: "home" */
      '@/views/home/index.vue').catch(catchRoute),
  Add: () => import(/* webpackChunkName: "add" */
      '@/views/About.vue').catch(catchRoute),
  UserCenter: () => import(/* webpackChunkName: "user-center" */
      '@/views/userCenter/index.vue').catch(catchRoute),
};

matchTabRoutes(tabRoutersConf);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'index',
      component: BaseLayout,
      children: tabRoutersConf.concat([ // 其他页面路由
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "login" */ '@/views/base/login/index.vue').catch(catchRoute),
          meta: { title: '主页', icon: 'home', header: 'hidden' },
        },
      ]),
    },
  ],
});

router.beforeEach( (to: any, from: any, next: any) => {
  // TODO 待完成登录判断
  // if (
  //     true
  //     && !hasUserInfo()
  //     && to.path != '/home'
  // ) {
  //   store.dispatch('user/openLoginDialog');
  //   Toast({message: '请先登录!', position: 'bottom'});
  //   next({path: '/'});
  //   return;
  // }
    next();
});
router.afterEach( (to: any, from: any) => {
});

export { router, lazyRoutes };
