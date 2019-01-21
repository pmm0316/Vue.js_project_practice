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
    async created() {
      this.loading = true
      try {
        let result = await this.$fetch('/questions')
        console.log(result)
        this.questions = result.data
      } catch (e) {
        this.error = e
      }
      this.loading = false
    }
  }
</script>
