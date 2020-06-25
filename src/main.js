import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import axios from 'axios'
import 'vant/lib/index.css';
import { Toast } from 'vant'
Vue.use(Vant);
axios.interceptors.response.use(res => {
  const { statusCode, message } = res.data
  if (statusCode && statusCode == 401) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    Toast.fail(message)
    router.replace('/login')
  }
  return res
})
Vue.prototype.$axios = axios
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
