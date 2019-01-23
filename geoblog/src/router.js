import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login'
import GeoBlog from './components/GeoBlog'
import NotFound from './components/NotFound'


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
  next()
})

export default router
