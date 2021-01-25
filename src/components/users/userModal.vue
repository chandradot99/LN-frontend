<template>
  <b-modal id="userModal"  ref="userModalRef" hide-header hide-footer>
    <svg class="icon-close" @click="close">
      <use xlink:href="/assets/img/ln-icons.svg#ico_close"></use>
    </svg>
    <h4>Add User</h4>
    <b-form>
      <b-form-group>
        <b-input placeholder="Name"></b-input>
      </b-form-group>
      <b-form-group>
        <b-input placeholder="Email"></b-input>
      </b-form-group>
      <b-form-group class="role-type-wrap">
        <b-form-radio name="role-type" value="admin">Admin</b-form-radio>
        <b-form-radio name="role-type" value="customer_executive">Customer Executive</b-form-radio>
      </b-form-group>
      <b-form-group class="mobile-number-wrap">
        <b-input placeholder="Mobile Number (Optional)" type="number"></b-input>
      </b-form-group>
      <b-form-group>
        <b-button class="submit-btn">ADD USER</b-button>
      </b-form-group>
    </b-form>
  </b-modal> 
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    open () {
      this.$refs.userModalRef.show()
    },
    close () {
      this.$refs.userModalRef.hide()
    }
  }
}
</script>

<style lang="scss" scoped>
  .submit-btn {
    width: 100%;
  }
</style>

<style lang="scss">
  #userModal {
    .modal-dialog {
      width: 450px !important;
      .modal-content {
        padding: 30px 30px 0px;
        .icon-close {
          width: 18px;
          height: 18px;
          position: absolute;
          top: -5px;
          right: -5px;
          cursor: pointer;
        }
        h4 {
          font-weight: 100;
          margin-bottom: 30px;
        }
        .role-type-wrap {
          > div {
            display: flex;
            justify-content: space-between;
          }
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
      }
    }
  }
</style>
