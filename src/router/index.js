import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home'
import Users from '@/views/users'
import Login from '@/views/auth/login'
import Signup from '@/views/auth/signup'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: Home,
    component: Home,
    redirect: '/users',
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
    name: Login,
    component: Login
  },
  {
    path: '/signup',
    name: Signup,
    component: Signup
  }
]

const router = new Router({
  routes
})

export default router