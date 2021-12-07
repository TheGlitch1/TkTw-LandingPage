import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/css/tailwind.css"
// import Vue from 'vue'   // in Vue 2
import axios from 'axios'
import VueAxios from 'vue-axios'
import json from './assets/data/tktw_static.json'

Vue.config.productionTip = false
// Vue.prototype.$appConfig = json;
Vue.use(VueAxios, axios)
// Vue.use(json,json)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
