export default function (resources) {
  return {
    data () {
      let initData = {
        remoteDataLoading: 0,
        remoteErrors: {}
      }
      for (let key in resources) {
        initData[key] = null
        initData.remoteErrors[key] = null
      }
      return initData
    },
    computed: {
      remoteDataBusy() {
        return this.$data.remoteDataLoading !== 0
      },
      hasRemoteErrors () {
        return Object.keys(this.$data.remoteErrors).some(key => this.$data.remoteErrors[key])
      }
    },
    methods: {
      async fetchResources (key, url) {
        this.$data.remoteDataLoading++
        // 重置错误
        this.$data.remoteErrors[key] = null
        try {
         let result = await this.$fetch(url)
          this.$data[key] = result.data
        }catch (e) {
          console.error(e)
          // 放置错误
          this.$data.remoteErrors[key] = e
        }
        this.$data.remoteDataLoading--
      }
    },
    created () {
      for (let key in resources) {
        this.fetchResources(key, resources[key])
      }
    }
  }
}
