/**
 * CREATED DATE: 2019/1/22 17:27:33
 * author: mingmingbuzai
 * email: 847679250@qq.com
 */
import Vue from 'vue'
import Vuex from 'vuex'
import {$fetch} from '../plugins/fetch'
import router from '../router'
Vue.use(Vuex)

let state = {
  user: null
}

let mutations = {
  user (state, user) {
    state.user = user
  }
}

let getters = {
  user: state => state.user,
  userPicture: () => null
}

let actions = {
  async login ({commit}) {
    try {
      let data = await $fetch('/user')
      commit('user', data.user)
      router.replace(router.currentRoute.params.wantedRoute || {name: 'home'})
    }catch (e) {
      console.warn(e)
    }
  },
  logout ({commit}) {
    commit('user', null)
    /**
     * 如果此路由是私有的,
     * 则要跳转到登录页面,
     * 并记录保存这个私有路由
     */
    if (router.currentRoute.matched.some(r => r.meta.private)) {
      router.replace({ name: 'login', params: {
          wantedRoute: router.currentRoute.fullPath
        }
      })
    }
  },
  async init({dispatch}) {
    await dispatch('login')
  }
}

const store = new Vuex.Store({
  // 严格模式
  strict: process.NODE_ENV !== 'production',
  state,
  mutations,
  getters,
  actions
})

export default store
