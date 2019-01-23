/**
 * CREATED DATE: 2019/1/22 17:27:33
 * author: mingmingbuzai
 * email: 847679250@qq.com
 */
import Vue from 'vue'
import Vuex from 'vuex'
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
  login ({commit}) {
    const userData = {
      profile: {
        displayName: 'Mr Dog'
      }
    }
    commit('user', userData)
  },
  logout ({commit}) {
    commit('user', null)
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
