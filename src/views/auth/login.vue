<template>
  <div class="login-wrap h-100">
    <div class="left-section">
    </div>
    <div class="right-section">
      <div class="ln-logo">
        <img src="https://media.glassdoor.com/sqll/2859416/locusnine-squarelogo-1560237521331.png" alt="">
      </div>
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

          if (data.error) {
            this.$bvToast.toast(data.error.user_authentication, {
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
