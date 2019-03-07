import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import BaseLayout from '../views/base/layout/Layout.vue';

import {RouteConfigInfo, routesConf} from './routesConf';
Vue.use(Router);


function catchRoute(error:any) { // TODO 通过@import catch 实现缓存问题
  console.log(error,'catchRoute')
}


const lazyRoutes:any = {
  Home: () => import('@/views/home/index.vue').catch(catchRoute),
  Add: () => import('@/views/About.vue').catch(catchRoute),
  UserCenter: () => import('@/views/userCenter/index.vue').catch(catchRoute),
}

/**
 *
 * @param routesConf 传入路由配置
 */
function matchLazyRoutes(routesConf: Array<RouteConfigInfo> ) {
  for (let i = 0; i < routesConf.length; i++) {
    const syncName = routesConf[i].component;
    if ( syncName && typeof syncName == 'string') {
      /** 通过 component name 字符串 和 lazyRoutes key 进行匹配 */
      routesConf[i].component = lazyRoutes[syncName];
    }
    if (routesConf[i].children && routesConf[i].children.length) { // 递归子路由
      matchLazyRoutes(routesConf[i].children);
    }
  }
}
matchLazyRoutes(routesConf);

// @ts-ignore
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'index',
      component: BaseLayout,
      children: routesConf
    },
  ],
});

router.beforeEach( (to:any, from:any, next:any) => {
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
router.afterEach( (to:any, from:any) => {
});

export { router };
