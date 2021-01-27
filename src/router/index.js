import Vue from 'vue'
import Router from 'vue-router'
import AuthRequired from '@/utils/AuthRequired'

import Home from '@/views/home'
import Users from '@/views/users'
import Login from '@/views/auth/login'
import Signup from '@/views/auth/signup'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/users',
    beforeEnter: AuthRequired,
    children: [
      {
        path: 'users',
        name: Users,
        component: Users
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  }
]

const router = new Router({
  routes
})

export default router