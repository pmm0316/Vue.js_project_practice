<template>
    <main class="faq">
      <h1>Frenquently Asked Questions</h1>
      <div v-if="error">
        Can't load the questions
      </div>
      <section class="list">
        <article v-for="question of questions">
          <h2 v-html="question.title"></h2>
          <p v-html="question.content"></p>
        </article>
        <Loading v-if="loading"/>
      </section>
    </main>
</template>

<script>
  export default {
    name: 'FAQ',
    data () {
      return {
        questions: [],
        error: null,
        loading: false
      }
    },
    methods: {
    },
    created() {
      this.loading = true
      fetch('https://www.easy-mock.com/mock/5bfb6f42db1e494ccae9b098/questions').then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject('error')
        }
      }).then(result => {
        this.questions = result.data
        this.loading = false
      })
    }
  }
</script>
