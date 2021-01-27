<template>
  <div class="login-wrap h-100">
    <div class="left-section">
    </div>
    <div class="right-section">
      <div class="ln-logo">
        <img src="https://media.glassdoor.com/sqll/2859416/locusnine-squarelogo-1560237521331.png" alt="">
      </div>
      <b-form>
        <b-form-group label="Name" :class="{ 'form-group--error': $v.user.name.$error }">
          <b-input v-model="user.name" type="text" placeholder="Name"></b-input>
          <div class="error" v-if="$v.user.name.$error && !$v.user.name.required">Name is required</div>
        </b-form-group>
        <b-form-group label="Email" :class="{ 'form-group--error': $v.user.email.$error }">
          <b-input v-model="user.email" type="email" placeholder="Email"></b-input>
          <div class="error" v-if="$v.user.email.$error && !$v.user.email.required">Email is required</div>
          <div class="error" v-if="user.email && $v.user.email.$error && !$v.user.email.validEmail">Email is not valid</div>
        </b-form-group>
        <b-form-group label="Mobile Number">
          <b-input v-model="user.mobile_number" type="number" placeholder="Mobile Number (Optional)"></b-input>
        </b-form-group>
        <b-form-group label="Password" :class="{ 'form-group--error': $v.user.password.$error }">
          <b-input v-model="user.password" type="password" placeholder="Password"></b-input>
          <div class="error" v-if="$v.user.password.$error && !$v.user.password.required">Password is required</div>
        </b-form-group>
        <b-form-group label="Password Confirmation" :class="{ 'form-group--error': $v.user.password_confirmation.$error }">
          <b-input v-model="user.password_confirmation" type="password" placeholder="Confirm Password"></b-input>
          <div class="error" v-if="$v.user.password_confirmation.$error && !$v.user.password_confirmation.sameAsPassword">Password do not match</div>
        </b-form-group>
        <b-form-group>
          <b-button @click="signUp()">Sign Up</b-button>
        </b-form-group>
      </b-form>
      <div>
        <span>Already a member? </span>
        <router-link to="/login"><a href="">Login</a></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import APIService from '@/services/api.service.js'
import AuthService from '@/services/auth.service.js'
import { required, sameAs } from 'vuelidate/lib/validators'

const validEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default {
  data () {
    return {
      user: {
        name: '',
        email: '',
        mobile_number: '',
        password: '',
        password_confirmation: ''
      }
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
      password: {
        required
      },
      password_confirmation: {
        sameAsPassword: sameAs('password')
      }
    }
  },
  methods: {
    signUp () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$Progress.start()
        AuthService.signup(this.user).then((data) => {
          this.$Progress.finish()

          if (data.message) {
            this.$bvToast.toast(data.message.split('Key')[1], {
              title: 'Error',
              variant: 'danger',
              autoHideDelay: 5000
            })
          } else {
            localStorage.setItem('auth_token', data.auth_token)
            localStorage.setItem('loggedInUser', JSON.stringify(data.user))

            APIService.setTokenHeader(data.auth_token)

            this.$router.push('/users')
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-wrap {
    display: flex;
    .left-section {
      width: 60%;
      background-color: #3576ab;
      background-image: url('https://gawvs.in//assets/img/login.png');
      background-position: center;
      background-repeat: no-repeat;
    }
    .right-section {
      width: 40%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      form {
        width: 450px;
        background-color: white;
        z-index: 99;
        .btn {
          width: 100%;
          background-color: #3576ab;
          border-color: #3576ab;
        }
      }
      .ln-logo {
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        img {
          width: 100px;
          height: auto;
        }
      }
      a {
        color: #3576ab;
      }
    }
  }
</style>
