import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import FAQ from './components/FAQ'
import Login from './components/Login'
import TicketsLayout from './components/TicketsLayout'
import state from './state'

Vue.use(VueRouter)

const routes= [
  {path: '/', name: 'home', component: Home},
  {path: '/faq', name: 'faq', component: FAQ},
  {path: '/login', name: 'login', component: Login},
  {path: '/tickets', name: 'tickets', component: TicketsLayout, meta: {private: true}}
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.meta.private && !state.user) {
    next({
      name: 'login',
      params: {
        wantedRoute: to.fullPath
      }
    })
    return
  }
  next()
})

export default router
