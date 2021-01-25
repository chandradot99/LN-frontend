import Vue from 'vue'
import Router from 'vue-router'

import Users from './../components/users'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirectTo: '/users'
  },
  {
    path: '/users',
    name: Users,
    component: Users
  }
]

const router = new Router({
  routes
})

export default router