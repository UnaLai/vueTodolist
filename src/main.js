import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import routesSetting from './setRoutes.js'

Vue.config.productionTip = false
Vue.use(vueRouter);
const router = new vueRouter({
  routes: routesSetting,
  mode: "history"
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
