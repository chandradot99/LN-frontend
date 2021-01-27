<template>
  <div class="login-wrap h-100">
    <div class="left-section">
    </div>
    <div class="right-section">
      <div class="ln-logo">
        <img src="/assets/img/Logo.svg" alt="">
      </div>
      <h2>Sign In</h2>
      <b-form>
        <b-form-group label="Email" :class="{ 'form-group--error': $v.user.email.$error }">
          <b-input v-model="user.email" type="email" placeholder="Email"></b-input>
          <div class="error" v-if="$v.user.email.$error && !$v.user.email.required">Email is required</div>
          <div class="error" v-if="user.email && $v.user.email.$error && !$v.user.email.validEmail">Email is not valid</div>
        </b-form-group>
        <b-form-group label="Password" :class="{ 'form-group--error': $v.user.password.$error }">
          <b-input v-model="user.password" type="password" placeholder="Password"></b-input>
          <div class="error" v-if="$v.user.password.$error && !$v.user.password.required">Password is required</div>
        </b-form-group>
        <b-form-group>
          <b-button @click="signin">Sign In</b-button>
        </b-form-group>
      </b-form>
      <div>
        <span>Not a member yet? </span>
        <router-link to="/signup"><a href="">Register here</a></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import APIService from '@/services/api.service.js'
import AuthService from '@/services/auth.service.js'
import { required } from 'vuelidate/lib/validators'

const validEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  validations: {
    user: {
      email: {
        required,
        validEmail
      },
      password: {
        required
      }
    }
  },
  methods: {
    signin () {
      this.$v.$touch()
      
      if (!this.$v.$invalid) {
        this.$Progress.start()
        AuthService.login(this.user).then((data) => {
          this.$Progress.finish()
          localStorage.setItem('auth_token', data.auth_token)
          localStorage.setItem('loggedInUser', JSON.stringify(data.user))

          APIService.setTokenHeader(data.auth_token)

          this.$router.push('/users')
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
      // background-image: url('https://images.unsplash.com/photo-1511971523672-53e6411f62b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
      // background-origin: center;
      // background-size: cover;
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
        width: 100%;
        .btn {
          width: 100%;
          background: linear-gradient(180deg,#7ccc91,#40b4c1 131.11%);
          border-color: #7ccc91;
        }
      }
      .ln-logo {
        background-color: #3576ab;
        position: absolute;
        top: 20px;
        left: 20px;
        img {
          width: 200px;
          height: auto;
        }
      }
    }
  }
</style>
