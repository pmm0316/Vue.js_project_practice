<template>
    <div class="new-ticket">
      <SmartForm
        :valid="valid"
        :operation="operation"
        title="New ticket">
        <FormInput
          placeholder="Short description(max 100 chars)"
          maxlength="100"
          required
          name="title"
          v-model="title"/>
        <FormInput
          row="6"
          type="textarea"
          placeholder="Description you problem in details"
          name="description"
          v-model="description"/>
        <template slot="actions">
          <router-link
            class="secondary"
            tag="button" :to="{name: 'tickets'}">
            Go back
          </router-link>
          <button
            :disabled="!valid"
            type="submit">
            Send ticket
          </button>
        </template>
      </SmartForm>
    </div>
</template>

<script>
  import PersistantData from '../mixins/PersistantData'
  export default {
    name: 'NewTicket',
    mixins: [
      PersistantData('NewTicket', ['title', 'description'])
    ],
    data () {
      return {
        title: '',
        description: ''
      }
    },
    computed: {
      valid () {
        return !!this.title && !!this.description
      }
    },
    methods: {
      async operation () {
        let ticket = {
          title: this.title,
          description: this.description
        }
        // 请求后端
        const result = await this.$fetch('/tickets/new', {
          method: 'POST',
          body: JSON.stringify(ticket)
        })
        // 数据保存在前端state中
        this.$state.tickets.push(ticket)
        // 清空输入框
        this.title = this.description = ''
      }
    }
  }
</script>

<style scoped>

</style>
