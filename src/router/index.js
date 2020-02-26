import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home'),
    /* 自定义对象配置路由拦截 */
    meta: {
      requireAuth: true // 需要登录才可以访问
    }
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News'),
    meta: {
      requireAuth: true // 需要登录才可以访问
    }
  },
  {
    path: '/report',
    name: 'Report',
    component: () => import('../views/Report'),
    meta: {
      requireAuth: true // 需要登录才可以访问
    }
  },
  {
    path: '/chart',
    name: 'Chart',
    component: () => import('../views/Chart'),
    meta: {
      requireAuth: true // 需要登录才可以访问
    }
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/Form'),
    meta: {
      requireAuth: true // 需要登录才可以访问
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
