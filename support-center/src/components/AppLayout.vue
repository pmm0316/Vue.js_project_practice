<template>
    <div class="app-layout">
      <header class="header">
        <div>
          <img class="img" src="../assets/logo.svg" alt=""/>
        </div>
        <div>My Shirt shop</div>
      </header>
      <nav-menu/>
      <router-view/>
    </div>
</template>

<script>
  import NavMenu from './NavMenu'
  export default {
    name: 'AppLayout',
    components: {
      NavMenu
    }
  }
</script>

<style lang='stylus'>
@import "../style/main.styl"
</style>
<style lang='stylus' scoped>
  .header {
    .img {
      width: 64px;
      height: 64px;
    }
  }
</style>
