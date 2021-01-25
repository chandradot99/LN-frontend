<template>
  <div class="users-wrap h-100">
    <div class="header-section">
      <div class="left-section">
        <svg class="icon">
          <use xlink:href="/assets/img/ln-icons.svg#ico_users"></use>
        </svg>
        <span>Users</span>
      </div>
      <div class="right-section">
        <div class="input-wrap">
          <b-input placeholder="Search"></b-input>
          <svg class="icon">
            <use xlink:href="/assets/img/ln-icons.svg#ico_search"></use>
          </svg>
        </div>
        <div class="btn-wrap">
          <b-button class="add-user-btn" @click="addUser">
            <svg class="icon">
              <use xlink:href="/assets/img/ln-icons.svg#ico_add"></use>
            </svg>
            <span>Add User</span>
          </b-button>
        </div>
      </div>
    </div>
    <div class="list-section">
      <b-table sticky-header :items="users" :fields="fields" :busy="isBusy" head-variant="light">
        <template #cell(status)="row">
          <div class="status">
            <span class="status-icon" :class="row.item.status"></span>
            <span>{{row.item.status}}</span>
          </div>
        </template>
        <template #cell(role_id)="row">
          <span class="role-type">
            {{getRoleName(row.item.role_id)}}
          </span>
        </template>
        <template #cell(actions)="row">
          <div class="actions">
            <svg class="icon" @click="editUser(row.item)">
              <use xlink:href="/assets/img/ln-icons.svg#ico_edit"></use>
            </svg>
            <svg class="icon" @click="deleteUser(row.item, row.index)">
              <use xlink:href="/assets/img/ln-icons.svg#ico_delete"></use>
            </svg>
          </div>
        </template>
        <template #table-busy>
          <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading...</strong>
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import UserService from '@/services/user.service'

export default {
  props: {
    users: {
      type: Array
    },
    roles: {
      type: Array
    },
    isBusy: {
      type: Boolean
    }
  },
  data() {
    return {
      fields: [
        { key: 'name', label: 'Name', sortable: true },
        { key: 'email', label: 'Email' },
        { key: 'role_id', label: 'Role Type' },
        { key: 'status', label: 'Status' },
        { key: 'actions', label: '' }
      ]
    }
  },
  methods: {
    addUser() {
      this.$emit('add-user')
    },
    editUser (user) {
      this.$emit('edit-user', user)
    },
    deleteUser (user, index) {
      this.$Progress.start()

      let config = { id: user.id }
      UserService.delete(config).then(() => {
        this.$emit('on-delete', index)
        this.$Progress.finish()
      })
    },
    getRoleName (roleId) {
      let role = _.find(this.roles, (role) => {
        return role.id === roleId
      })
      return role ? _.lowerCase(role.name) : ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .users-wrap {
    background-color: #ffffff;
    .header-section {
      display: flex;
      align-items: center;
      height: 75px;
      padding: 0 20px;
      .left-section {
        padding-left: 40px;
        .icon {
          width: 38px;
          height: 38px;
        }
        span {
          padding-left: 5px;
          font-size: 21px;
        }
      }
      .right-section {
        display: flex;
        margin: 0 0 0 auto;
        .input-wrap {
          width: 300px;
          position: relative;
          .icon {
            position: absolute;
            width: 15px;
            height: 15px;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
          }
        }
        .btn-wrap {
          margin-left: 25px;
          .add-user-btn {
            width: 105px;
            .icon {
              width: 12px;
              height: 12px;
            }
            span {
              padding-left: 5px;
              font-size: 13px;
            }
          }
        }
      }
    }
    .list-section {
      height: calc(100% - 75px);
    }
  }
</style>

<style lang="scss">
  .table {
    tbody {
      .status {
        text-transform: capitalize;
        .status-icon {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
          margin-right: 10px;
          &.active {
            background-color: #90ee90;
          }
          &.pending {
            background-color: #f8de7e;
          }
          &.inactive {
            background-color: #DC143C;
          }
        }
      }
      .role-type {
        text-transform: capitalize;
      }
      .actions {
        .icon {
          margin: 0 5px;
        }
      }
    }
  }
</style>
