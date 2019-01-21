<template>
    <main class="faq">
      <h1>Frenquently Asked Questions</h1>
      <div v-if="hasRemoteErrors">
        Can't load the questions
      </div>
      <section class="list">
        <article v-for="question of questionList">
          <h2 v-html="question.title"></h2>
          <p v-html="question.content"></p>
        </article>
        <Loading v-if="remoteDataBusy"/>
      </section>
    </main>
</template>

<script>
  import RemoteData from '../mixins/RemoteData'
  export default {
    name: 'FAQ',
    mixins: [
      RemoteData({
        questionList: '/questions'
      })
    ],
    data () {
      return {
        // error: null//,
        //loading: false
      }
    }
  }
</script>
