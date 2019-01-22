/**
 * CREATED DATE: 2019/1/22 13:53:31
 * author: mingmingbuzai
 * email: 847679250@qq.com
 */
export default function (id, fields) {
  return {
    methods: {
      saveAllPersistantData () {
        for (const field of fields) {
          localStorage.setItem(`${id}.${field}`, this.$data[field])
        }
      }
    },
    /**
     * 组件销毁时，
     * 保存输入的数据
     */
    beforeDestroy () {
      this.saveAllPersistantData()
    },
    watch: fields.reduce((obj, field) => {
      obj[field] = function (val) {
        localStorage.setItem(`${id}.${field}`, JSON.stringify(val))
      }
      return obj
    }, {}),
    created () {
      for (const field of fields) {
        let savedValue = localStorage.getItem(`${id}.${field}`)
        if (savedValue != null) {
          this.$data[field] = JSON.parse(savedValue)
        }
      }
    }
  }
}
