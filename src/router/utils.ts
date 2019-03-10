import {RouteConfigInfo} from '@/common/types/base/Router';
import {lazyRoutes} from '@/router/index';

/**
 * @Author: akai
 * @Create: 2019-03-08 10:54
 * @Description: TODO
 */

export function catchRoute(error:any) { // TODO 通过@import catch 实现缓存问题
  console.log(error,'catchRoute')
}

export function matchTabRoutes(routesConf: Array<RouteConfigInfo> ) {
  for (let i = 0; i < routesConf.length; i++) {
    const syncName = routesConf[i].component;
    if ( syncName && typeof syncName == 'string') {
      /** 通过 component name 字符串 和 lazyRoutes key 进行匹配 */
      routesConf[i].component = lazyRoutes[syncName];
      // @ts-ignore
      routesConf[i].meta.isTab = true;
    }
    if (routesConf[i].children && routesConf[i].children.length) { // 递归子路由
      matchTabRoutes(routesConf[i].children);
    }
  }
}
