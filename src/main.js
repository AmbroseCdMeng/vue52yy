import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'animate.css'

// import Mint from 'mint-ui'
// import { Toast, Button } from 'mint-ui'

import axios from 'axios'
import VueAxios from 'vue-axios'

// import { getCookie } from '@/assets/cookie'
import common from '@/assets/common.js'
import filters from '@/assets/filters.js'
import directives from '@/assets/directives.js'
Vue.prototype.COMMON = common
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})

Vue.use(ElementUI)
// Vue.use(Mint)
// Vue.component(Toast.name, Toast)
// Vue.component(Button.name, Button)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {
//     console.log(store.state.username)
//     if (store.state.username) { next() } else { next({ path: '/login' }) }
//   }
// })
