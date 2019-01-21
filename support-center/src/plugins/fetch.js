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
    return data
  } else {
    const message = await response.text()
    const error = new Error(message)
    error.response = response
    throw error
  }
}
