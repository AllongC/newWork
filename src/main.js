import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import axios from 'axios'
import 'vant/lib/index.css';
Vue.prototype.$axios = axios
import { Toast } from 'vant'
Vue.use(Vant);
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (to.name == 'Center') {
    if (localStorage.getItem('token') && localStorage.getItem('userId')) {
      return next()
    } else {
      Toast.fail('请先登录！')
      router.replace('/login')
    }
  }
  next();
})
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
