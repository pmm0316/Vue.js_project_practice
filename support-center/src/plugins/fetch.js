let baseUrl
export default {
  install (Vue, options) {
    console.log(Vue)
    console.log('install')
    baseUrl = options.baseUrl
    Vue.prototype.$fetch = $fetch
  }
}

export async function $fetch(url) {
 const response = await fetch(`${baseUrl}${url}`)
  if (response.ok) {
    let data = await response.json()
    return data
  } else {
    const error = new Error('error')
    throw error
  }
}
