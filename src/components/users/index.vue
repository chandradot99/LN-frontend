<template>
  <div class="h-100">
    <user-list @add-user="addUser" @edit-user="editUser" @on-delete="deleteUserFromList" :users="users" :roles="roles" :isBusy="isBusy"></user-list>
    <user-modal ref="userModal" @user-created="appendUserToList" @user-updated="updateUserInList" :roles="roles"></user-modal>
  </div>
</template>

<script>
import _ from 'lodash'
import UserList from './list'
import UserModal from './userModal'
import RoleService from '@/services/role.service'
import UserService from '@/services/user.service'

export default {
  components: {
    UserList,
    UserModal
  },
  data () {
    return {
      roles: [],
      users: [],
      isBusy: false
    }
  },
  methods: {
    addUser() {
      let user = {
        name: '',
        email: '',
        mobile_number: '',
        role_id: ''
      }
      this.$refs.userModal.open(user, 'add')
    },
    editUser (user) {
      this.$refs.userModal.open(user, 'edit')
    },
    loadRoles () {
      RoleService.read().then((roles) => {
        this.roles = roles
      })
    },
    loadUsers() {
      this.isBusy = true
      this.$Progress.start()
      UserService.read().then((users) => {
        this.users = users
        this.$Progress.finish()
        this.isBusy = false
      })
    },
    appendUserToList(user) {
      this.users = _.concat(this.users, user)
    },

    updateUserInList (user) {
      let index = _.findIndex(this.users, (u) => {
        return u.id == user.id
      })

      this.$set(this.users, index, user)
    },
    deleteUserFromList(index) {
      this.users.splice(index, 1)
      return this.users
    }
  },
  mounted () {
    this.loadUsers()
    this.loadRoles()
  }
}
</script>

<style lang="scss">
  strong {
    padding-left: 10px;
  }
</style>