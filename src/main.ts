import Vue from 'vue';
import App from './App.vue';
import { router } from './router/index';
import store from './store/index';
import './registerServiceWorker';
import "normalize.css";
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false;

// 让route绑定到vue router中
sync(store, router);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
