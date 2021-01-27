import Vue from 'vue'
import router from '@/router'
import { BootstrapVue } from 'bootstrap-vue'
import VueProgressBar from 'vue-progressbar'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import ApiService from '@/services/api.service'
import { apiUrl } from '@/constants/config'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueProgressBar)
Vue.use(Vuelidate)

ApiService.init(apiUrl)
if (localStorage.getItem('auth_token')) {
  ApiService.setTokenHeader(localStorage.getItem('auth_token'))
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
