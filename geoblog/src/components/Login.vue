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
  export default {
    name: 'Login',
    methods: {
      openGoogleSignin () {
      }
    }
  }
</script>

<style scoped>

</style>
