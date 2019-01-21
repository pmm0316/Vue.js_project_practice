<template>
    <div class="row">
      <input
        class="input"
        :name="name"
        :class="inputClass"
        :type="type"
        @input="update"
        :value.prop="text"
        :placeholder="placeholder"
      />
    </div>
</template>

<script>
  export default {
    name: 'FormInput',
    model: {
      prop: 'text',
      event: 'update'
    },
    props: {
      name: {
        type: String,
      },
      type: {
        type: String,
        default: 'text'
      },
      text: {
        required: true
      },
      placeholder: {
        type: String
      },
      invalid: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      inputClass () {
        return {
          'invalid': this.invalid
        }
      }
    },
    methods: {
      update (event) {
        this.$emit('update', event.currentTarget.value)
      }
    }
  }
</script>

<style scoped>

</style>
