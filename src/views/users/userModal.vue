<template>
  <b-modal id="userModal"  ref="userModalRef" hide-header hide-footer>
    <svg class="icon-close" @click="close">
      <use xlink:href="/assets/img/ln-icons.svg#ico_close"></use>
    </svg>
    <h4>{{ mode === 'add' ? 'Add' : 'Edit' }} User</h4>
    <b-form>
      <b-form-group :class="{ 'form-group--error': $v.user.name.$error }">
        <b-input v-model="user.name" placeholder="Name"></b-input>
        <div class="error" v-if="$v.user.name.$error && !$v.user.name.required">Name is required</div>
      </b-form-group>
      <b-form-group :class="{ 'form-group--error': $v.user.email.$error }">
        <b-input v-model="user.email" placeholder="Email"></b-input>
        <div class="error" v-if="$v.user.email.$error && !$v.user.email.required">Email is required</div>
        <div class="error" v-if="user.email && $v.user.email.$error && !$v.user.email.validEmail">Email is not valid</div>
      </b-form-group>
      <b-form-group :class="{ 'form-group--error': $v.user.role_id.$error }">
        <div class="role-type-wrap">
          <b-form-radio-group
            v-model="user.role_id"
            :options="roles"
            name="user-roles"
            value-field="id"
            text-field="name"
          ></b-form-radio-group>
        </div>
        <div class="error" v-if="$v.user.role_id.$error && !$v.user.role_id.required">Please select role</div>
      </b-form-group>
      <b-form-group class="mobile-number-wrap">
        <b-input v-model="user.mobile_number" placeholder="Mobile Number (Optional)" type="number"></b-input>
      </b-form-group>
      <b-form-group>
        <b-button class="submit-btn" v-if="mode === 'add'" @click="createUser">ADD USER</b-button>
        <b-button class="submit-btn" v-if="mode === 'edit'" @click="updateUser">UPDATE USER</b-button>
      </b-form-group>
    </b-form>
  </b-modal> 
</template>

<script>
import _ from 'lodash'
import { required } from 'vuelidate/lib/validators'
import UserService from '@/services/user.service'

const validEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default {
  props: {
    roles: {
      type: Array
    }
  },
  data () {
    return {
      user: {},
      mode: 'add'
    }
  },
  validations: {
    user: {
      name: {
        required
      },
      email: {
        required,
        validEmail
      },
      role_id: {
        required
      }
    }
  },
  methods: {
    open (userData, mode) {
      this.user = _.merge({}, userData)
      this.mode = mode
      this.$refs.userModalRef.show()
    },
    close () {
      this.$refs.userModalRef.hide()
    },
    createUser () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$Progress.start()
        UserService.create(this.user).then((user) => {
          this.$emit('user-created', user)
          this.$refs.userModalRef.hide()

          this.$Progress.finish()
        })
      }
    },
    updateUser () {
      this.$Progress.start()
      let config = { id: this.user.id }
      UserService.update(config, this.user).then((user) => {
        this.$emit('user-updated', user)
        this.$refs.userModalRef.hide()

        this.$Progress.finish()
      })
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
            color: #6d6d6d;
            text-transform: capitalize;
          }
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
      }
    }
  }
</style>
