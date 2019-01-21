<template>
    <main class="login">
      <h1>Please login to continue</h1>
      <form>
        <FormInput :value="username" name="username" placeholder="Username"/>
      </form>
    </main>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        username: ''
      }
    }
  }
</script>

<style scoped>

</style>
