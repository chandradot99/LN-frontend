<template>
  <div class="h-100">
    <ln-header></ln-header>
    <div class="ln-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LNHeader from '@/components/shared/ln-header'

export default {
  components: {
    'ln-header': LNHeader
  },
  data () {
    return {}
  }  
}
</script>

<style lang="scss" scoped>
  .ln-content {
    height: calc(100% - 60px);
    padding: 30px;
    background-color: #666666;
    margin: 0 auto;
  }
</style>
