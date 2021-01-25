<template>
  <div class="ln-header">
    <div class="ln-logo">
      <img src="/assets/img/Logo.svg" alt="">
    </div>
    <div class="ln-links">
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="/assets/img/ln-icons.svg#ico_dashboard"></use>
          </svg>
          <span>Dashboard</span>
        </li>
        <li class="active">
          <svg class="icon">
            <use xlink:href="/assets/img/ln-icons.svg#ico_users"></use>
          </svg>
          <span>Users</span>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="/assets/img/ln-icons.svg#ico_sessionmanager"></use>
          </svg>
          <span>Session Manager</span>
        </li>
      </ul>
    </div>
    <div class="right-nav">

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .ln-header {
    background-color: #282828;
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