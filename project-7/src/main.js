import Vue from 'vue'
import App from './App.vue'
import router from './router/main'
import store from './store/main'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
}).$mount('#app')
