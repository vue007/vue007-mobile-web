import { RouteConfigInfo } from '@/common/types/base/Router';
import { lazyRoutes } from '@/router/index';
import { clone as _clone } from 'lodash'

/**
 * @Author: akai
 * @Create: 2019-03-08 10:54
 * @Description: 路由相关工具
 */

export function catchRoute(error: any) { // TODO 通过@import catch 实现缓存问题
  console.log(error, 'catchRoute');
}

export function filterTabRoutes(routesConf: RouteConfigInfo[]) {
  const _routesConf: RouteConfigInfo[] = _clone(routesConf)
  _routesConf.forEach( (routeItem, index) => {
    if ( routeItem.component === undefined ) {
      _routesConf.splice(index, 1);
    }
  });
  return _routesConf;
}

export function matchTabRoutes(routesConf: RouteConfigInfo[]) {

  for (const routeItem of routesConf) {
    const syncName = routeItem.component;

    if ( syncName && typeof syncName === 'string') {
      /** 通过 component name 字符串 和 lazyRoutes key 进行匹配 */
      routeItem.component = lazyRoutes[syncName];
      // @ts-ignore
      routeItem.meta.isTab = true;
    }
    if (routeItem.children && routeItem.children.length) { // 递归子路由
      matchTabRoutes(routeItem.children);
    }
  }

  return routesConf;

}
