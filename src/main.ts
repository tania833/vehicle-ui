import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import { routes } from './Router.js';
import { createStore } from './store/index'
import Transitions from 'vue2-transitions'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Transitions)

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

new Vue({
  el: '#app',
  router: router,
  store: createStore(),
  vuetify,
  render: (h) => h(App),
});
