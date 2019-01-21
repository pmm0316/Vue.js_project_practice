import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import FAQ from './components/FAQ'
import Login from './components/Login'

Vue.use(VueRouter)

const routes= [
  {path: '/', name: 'home', component: Home},
  {path: '/faq', name: 'faq', component: FAQ},
  {path: '/login', name: 'login', component: Login}
]

const router = new VueRouter({
  routes
})

export default router
