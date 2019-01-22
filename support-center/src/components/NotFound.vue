<template>
    <main class="not-found">
      <h1>This page can't be found</h1>
      <div class="actions">
        <router-link tag="button" :to="{name: 'home'}">返回主页</router-link>
      </div>
    </main>
</template>

<script>
  export default {
    name: 'NotFound'
  }
</script>

<style scoped>

</style>
