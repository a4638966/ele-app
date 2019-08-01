import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/Index')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
// 全局路由守卫
router.beforeEach((to, from, next) => {
  // 根据存储状态查看当前是否为登录状态
  const isLogin = localStorage.ele_login ? true : false
  if (to.path === '/login') {
    next()
  } else {
    isLogin ? next() : next('/login')
  }
})
export default router
