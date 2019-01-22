import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import FAQ from './components/FAQ'
import Login from './components/Login'
import TicketsLayout from './components/TicketsLayout'
import Tickets from './components/Tickets'
import NewTicket from './components/NewTicket'
import state from './state'

Vue.use(VueRouter)

const routes= [
  {path: '/', name: 'home', component: Home},
  {path: '/faq', name: 'faq', component: FAQ},
  {path: '/login', name: 'login', component: Login, meta: {guest: true}},
  {
    path: '/tickets', component: TicketsLayout, meta: {private: true},
    children: [
      { path: '', name: 'tickets', component: Tickets},
      { path: 'new', name: 'new-ticket', component: NewTicket}
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  /**
   * 如果是私有路由，且没有登录
   * 则重定向到登录组件
   */
  if (to.matched.some(r => r.meta.private) && !state.user) {
    next({
      name: 'login',
      params: {
        wantedRoute: to.fullPath
      }
    })
    return
  }
  // 如果是访客路由，并用户已登录，则跳转到home页面
  if (to.matched.some(r => r.meta.guest) && state.user) {
    next({
      name: 'home'
    })
    return
  }
  next()
})

export default router
