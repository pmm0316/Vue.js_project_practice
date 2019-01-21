<template>
    <main class="login">
      <h1>Please login to continue</h1>
      <form>
        <FormInput v-model="username"
                   name="username"
                   placeholder="Username"/>
      </form>
    </main>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        username: '',
        mode: 'login',
        password: '',
        password2: '',
        email: ''
      }
    }
  }
</script>

<style scoped>

</style>
