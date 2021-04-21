/* eslint-disable no-unused-vars */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import $ from 'jquery'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import api from '@/api/api'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios, Axios)
Vue.use(VueClipboard)

/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token') || ''
  // 配置接口信息
  Axios.defaults.baseURL = api.rootUrl
  Axios.defaults.headers.common['magic-token'] = token

  if (!token && to.name !== 'login') {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
