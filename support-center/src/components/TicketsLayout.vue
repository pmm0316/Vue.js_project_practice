<template>
    <main class="tickets-layout">
      <h1>you support tickets</h1>
      <div class="actions">
        <router-link
          tag="button"
          class="secondary"
          :to="{name: 'tickets'}"
          v-if="$route.name !=='tickets'">
          See all tickets
        </router-link>
        <router-link
          tag="button"
          class="secondary"
          :to="{name: 'new-ticket'}"
          v-if="$route.name !=='new-ticket'">
          New ticket
        </router-link>
      </div>
      <router-view/>
    </main>
</template>

<script>
  export default {
    name: 'TicketsLayout'
  }
</script>

<style scoped>

</style>
