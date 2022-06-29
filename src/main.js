import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
//import store from '@/store/store.js'

Vue.config.productionTip = false


new Vue({
  vuetify,
  router,
  //store,
  render: h => h(App)
}).$mount('#app')
