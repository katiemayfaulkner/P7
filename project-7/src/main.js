import Vue from 'vue'
import App from './App.vue'
import router from './router/main'
import store from './store/main'
import Axios from 'axios';

Vue.config.productionTip = false

// set auth header
Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')