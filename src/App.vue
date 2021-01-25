<template>
  <div class="h-100">
    <ln-header></ln-header>
    <div class="ln-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LNHeader from './components/shared/ln-header'

export default {
  components: {
    'ln-header': LNHeader
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto');

  body {
    margin: 0;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
  }
  .h-100 {
    height: 100%;
  }
  .ln-content {
    height: calc(100% - 100px);
    background-color: #666666;
    padding: 20px;
  }
</style>

