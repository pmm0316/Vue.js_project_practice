<template>
    <form @submit.prevent="submit">
      <section class="content">
        <h2>{{title}}</h2>
        <slot/>
        <div class="actions">
          <slot name="actions"/>
        </div>
        <div v-if="error" class="error">{{error}}</div>
      </section>
      <transition>
        <Loading v-if="busy" class="overlay"/>
      </transition>
    </form>
</template>

<script>
  export default {
    name: 'SmartForm',
    props: {
      title: {
        type: String,
        required: true
      },
      operation: {
        type: Function,
        required: true
      },
      valid: {
        type: Boolean,
        required: true
      }
    },
    data () {
      return {
        busy: false,
        error: null
      }
    },
    methods: {
      async submit () {
        if (this.valid && !this.busy) {
          this.busy = true
          this.error = null
          try {
            await this.operation()
          }catch (e) {
            this.error = e.message
          }
          this.busy = false
        }
      }
    }
  }
</script>
