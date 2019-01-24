<template>
    <div class="welcome">
      <h1>Welcome</h1>
      <div class="actions">
        <button @click="openGoogleSignin">
          Sign in with Google
        </button>
      </div>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Login',
    methods: {
      ...mapActions({
        openGoogleSignin: 'login'
      })
    }
  }
</script>

<style scoped>

</style>
