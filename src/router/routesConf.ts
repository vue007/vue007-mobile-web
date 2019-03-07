import {RouteConfig} from 'vue-router';

/**
 * @Author: akai
 * @Create: 2019-03-07 20:15
 * @Description: TODO
 */

export interface RouteConfigInfo extends RouteConfig { // 路由配置信息： 组件通过名称进行注入
  component:any; //
  children?: any
}

let baseTabRoutesConf:Array<RouteConfigInfo> = [
  {
    path: '/home',
    name: 'home',
    component: 'Home',
    meta: { title: '主页', icon: 'home' }
  },
  {
    path: '/add',
    name: 'add',
    component: 'Add',
    meta: { title: '发布', icon: 'camera' }
  },
  {
    path: '/user-center',
    name: 'userCenter',
    component: 'UserCenter',
    meta: { title: '我的', icon: 'user' }
  },
];

const routesConf:Array<RouteConfigInfo> = baseTabRoutesConf.concat([

])

export {
  baseTabRoutesConf,
  routesConf,
}
