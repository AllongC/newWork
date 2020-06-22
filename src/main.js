import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import axios from 'axios'
import 'vant/lib/index.css';
Vue.prototype.$axios = axios
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
