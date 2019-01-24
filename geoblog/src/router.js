import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login'
import GeoBlog from './components/GeoBlog'
import NotFound from './components/NotFound'
import store from './store'


Vue.use(VueRouter)

const routes= [
  {path: '/', name: 'home', component: GeoBlog, meta: {private: true}},
  {path: '/login', name: 'login', component: Login},
  {path: '*', name: 'not-found', component: NotFound},
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const user = store.getters.user
  if (to.matched.some(r => r.meta.private) && !user) {
    next({
      name: 'login',
      params: {
        wantedRoute: to.fullPath
      }
    })
    return
  }
  // 如果是访客路由，并用户已登录，则跳转到home页面
  if (to.matched.some(r => r.meta.guest) && user) {
    next({
      name: 'home'
    })
    return
  }
  next()
})

export default router
