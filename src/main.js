import Vue from 'vue'
import App from './App.vue'
import '@/assets/normalize.css'

Vue.config.productionTip = true
Vue.config.devtools = true

new Vue({
  render: h => h(App),
}).$mount('#app')
