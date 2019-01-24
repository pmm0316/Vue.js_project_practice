import store from '../store'

let baseUrl
export default {
  install (Vue, options) {
    baseUrl = options.baseUrl
    Vue.prototype.$fetch = $fetch
  }
}

export async function $fetch(url, options) {
  const finalOptions = Object.assign({}, {
    header: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  }, options)
  const response = await fetch(`${baseUrl}${url}`, finalOptions)
  if (response.ok) {
    let data = await response.json()
    return data.data
  } else if (response.status === 403) {
    /**
     * 用户会话过期，
     * 则登出
     */
    store.dispatch('logout')
  } else {
    const message = await response.text()
    const error = new Error(message)
    error.response = response
    throw error
  }
}
