/**
 * @author: Akai
 * @date: 2019-03-06 14:39:51
 * @description: store 主文件； 模块在此注入
 */
import Vue from 'vue';
import Vuex from 'vuex';
import base from './module/base';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    base,

  }
});
