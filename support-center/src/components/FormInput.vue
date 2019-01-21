<template>
    <div class="row">
      <input
        class="input"
        :name="name"
        :class="inputClass"
        :type="type"
        :value.prop="value"
        :placeholder="placeholder"
      />
    </div>
</template>

<script>
  export default {
    name: 'FormInput',
    props: {
      name: {
        type: String,
      },
      type: {
        type: String,
        default: 'text'
      },
      value: {
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
    }
  }
</script>

<style scoped>

</style>
