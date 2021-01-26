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
        <b-form-group label="Email">
          <b-input v-model="user.email" type="email" placeholder="Email"></b-input>
        </b-form-group>
        <b-form-group label="Password">
          <b-input v-model="user.password" type="password" placeholder="Password"></b-input>
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

export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      AuthService.login(this.user).then((data) => {
        localStorage.setItem('auth_token', data.auth_token)
        localStorage.setItem('loggedInUser', JSON.stringify(data.user))

        APIService.setTokenHeader(data.auth_token)

        this.$router.push('/users')
      })
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
        background: linear-gradient(180deg,#7ccc91,#40b4c1 131.11%);
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
