import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import axios from 'axios'
import 'vant/lib/index.css';
import { Toast } from 'vant'
Vue.use(Vant);
axios.defaults.baseURL = 'http://127.0.0.1:3000'
axios.interceptors.request.use(config => {
  if (localStorage.getItem('token') && !config.headers.Authorization) {
    config.headers.Authorization = "Bearer " + localStorage.getItem('token')
  }
  return config
})
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
  if (to.meta.auth) {
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
