<template>
    <div class="tickets">
      <Loading v-if="remoteDataBusy"></Loading>
      <div class="empty" v-else-if="tickets.length === 0">
        You don't have any ticket yet.
      </div>
      <section class="tickets-list"
               v-else>
        <div v-for="ticket of tickets" class="ticket-item">
          <span>{{ticket.title}}</span>
          <span class="badge">{{ticket.status}}</span>
          <span class="date">{{ticket.date}}</span>
        </div>
      </section>
    </div>
</template>

<script>
  import RemoteData from '../mixins/RemoteData'
  export default {
    name: 'Tickets',
    mixins: [RemoteData({
      tickets: '/tickets'
    })]
  }
</script>

<style scoped>

</style>
