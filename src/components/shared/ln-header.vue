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
      <span>
        <svg class="icon">
          <use xlink:href="/assets/img/ln-icons.svg#ico_notification"></use>
        </svg>
      </span>
      <span>
        <svg class="icon">
          <use xlink:href="/assets/img/ln-icons.svg#ico_user"></use>
        </svg>
        <span>John Smith</span>
      </span>
      <span>
        <svg class="icon down-arrow">
          <use xlink:href="/assets/img/ln-icons.svg#ico_downarrow"></use>
        </svg>
      </span>
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
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    .ln-logo {
      width: 150px;
      cursor: pointer;
    }
    .ln-links {
      ul {
        padding-left: 0;
        margin-bottom: 0;
        li {
          list-style: none;
          display: inline-flex;
          align-items: center;
          margin: 0 20px;
          cursor: pointer;
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
    .right-nav {
      margin: 0 0 0 auto;
      color: #ffffff;
      display: flex;
      align-items: center;
      span {
        margin: 0 10px;
        display: inline-flex;
        align-items: center;
        font-size: 15px;
        cursor: pointer;
        .icon {
          width: 21px;
          height: 21px;
          &.down-arrow {
            width: 12px;
            height: 12px;
          }
        }
      }
    }
  }
</style>