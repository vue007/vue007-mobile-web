import {RouteConfig} from 'vue-router';

/**
 * @Author: akai
 * @Create: 2019-03-08 10:44
 * @Description: TODO
 */

export interface RouterMeta {
  title?: string; // 标题
  icon?: string; // 图标 name
}

export interface RouteConfigInfo extends RouteConfig { // 路由配置信息： 组件通过名称进行注入
  component:any; //
  children?: any;
  meta?: RouterMeta
}

