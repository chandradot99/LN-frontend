<template>
  <div class="h-100">
    <ln-header></ln-header>
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

<style lang="scss" scoped>
  .ln-header {
    background-color: #0E0E0E;
    height: 47px;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    .ln-logo {
      width: 150px;
    }
    .ln-links {
      ul {
        padding-left: 0;
        li {
          list-style: none;
          display: inline-flex;
          align-items: center;
          margin: 0 10px;
          .icon {
            width: 21px;
            height: 21px;
          }
          span {
            padding-left: 10px;
            color: #ffffff;
            font-size: 15px;
          }
          &.active {
            .icon {
              fill: orange
            }
            span {
              color: orange;
            }
          }
        }
      }
    }
  }
</style>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto');

  body {
    margin: 0;
    height: 100vw;
    font-family: 'Roboto', sans-serif;
    background-color: #282828;
  }
  .h-100 {
    height: 100%;
  }
</style>

