<template>
  <div class="h-100">
    <user-list @add-user="addUser"></user-list>
    <user-modal ref="userModal"></user-modal>
  </div>
</template>

<script>
import UserList from './list'
import UserModal from './userModal'

export default {
  components: {
    UserList,
    UserModal
  },
  methods: {
    addUser() {
      this.$refs.userModal.open()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


