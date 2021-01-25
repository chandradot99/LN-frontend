<template>
  <div class="h-100">
    <user-list @add-user="addUser" @edit-user="editUser" :roles="roles"></user-list>
    <user-modal ref="userModal" :roles="roles"></user-modal>
  </div>
</template>

<script>
import UserList from './list'
import UserModal from './userModal'
import RoleService from '@/services/role.service'

export default {
  components: {
    UserList,
    UserModal
  },
  data () {
    return {
      roles: []
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
    }
  },
  mounted () {
    this.loadRoles()
  }
}
</script>

<style lang="scss" scoped>

</style>