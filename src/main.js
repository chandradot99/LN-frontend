import Vue from 'vue'
import router from '@/router'
import { BootstrapVue } from 'bootstrap-vue'
import App from './App.vue'
import ApiService from '@/services/api.service'
import { apiUrl } from '@/constants/config'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

ApiService.init(apiUrl)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
