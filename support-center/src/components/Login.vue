<template>
    <main class="login">
      <h1>Please login to continue</h1>
      <!--<form>
        <FormInput v-model="username"
                   name="username"
                   placeholder="Username"/>
      </form>-->
      <SmartForm
        class="form"
        :valid="valid"
        :operation="operation"
        :title="title">
        <FormInput name="username"
                   v-model="username"
                   placeholder="Username"/>
        <FormInput name="password"
                   v-model="password"
                   placeholder="Password"/>
        <template v-if="mode === 'signup'">
          <FormInput name="password"
                     v-model="password2"
                     placeholder="Password2"/>
          <FormInput name="email"
                     v-model="email"
                     placeholder="Email"/>
        </template>
        <template slot="actions">
          <template v-if="mode === 'login'">
            <button
              class="secondary"
              @click="mode = 'signup'"
              type="button">
              Sign up
            </button>
            <button
              :display="!valid"
              type="submit">
              Login
            </button>
          </template>
          <template v-else-if="mode === 'signup'">
            <button
              class="secondary"
              @click="mode = 'login'"
              type="button">
              Back to login
            </button>
            <button
              :display="!valid"
              type="submit">
              Create  account
            </button>
          </template>
        </template>
      </SmartForm>
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
    },
    computed: {
      title () {
        switch (this.mode) {
          case 'login': return 'Login'
          case 'signup': return 'Create a new account'
        }
      },
      retypePasswordError () {
        return this.password2 && this.password2 !== this.password
      },
      signupValid () {
        return this.password2 && this.email && this.retypePasswordError
      },
      // 校验登录和注册
      valid () {
        return this.password && this.username &&
          (this.signupValid || this.mode !== 'signup')
      }
    },
    methods: {
      async operation () {
        await this[this.mode]()
      },
      async login () {
        let user = {
          username: this.username,
          password: this.password
        }
        this.$state.user = await this.$fetch('/login', {
          method: 'POST',
          body: JSON.stringify(user)
        })
        this.$state.user = user
        this.$router.replace(this.$route.params.wantedRoute || {name: 'home'})
      },
      async signup () {
        // TODO
      }
    }
  }
</script>

<style scoped lang="stylus">
  // >>> 改变其他组件的样式
  .form {
    >>> .content {
      max-width: 400px;
    }
  }
</style>
