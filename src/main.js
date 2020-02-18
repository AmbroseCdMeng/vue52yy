import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(ElementUI)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.filter('date2string', (date, frm = 'yyyy-MM-dd hh:mm:ss') => {
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  }
  if (/(y+)/.test(frm)) {
    frm = frm.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(frm)) {
      frm = frm.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return frm
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
