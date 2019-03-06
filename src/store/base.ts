/**
 * @author: Akai
 * @date: 2019-03-06 14:38
 * @description:
 */
import {login} from '@/api/base';
import User from '@/types/User';

export default {
  namespaced: true,
  state: {
    isCollapse: false,
  },
  mutations: {
    set_isCollapse(state: any, flag: boolean) {
      state.isCollapse = flag;
    },
  },
  actions: {
    toggleSidebar({state, commit}: any) {
      commit('set_isCollapse', !state.isCollapse);
    },

    login({state, commit}: any, user: User) {
      return new Promise((resolve, reject) => {
        login(user).then(res => {
          resolve(res.data);
        }).catch(err => {
          console.log(err);
          reject(err);
        });
      });
    }
  },
};
