import Vue from 'vue'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'
import './assets/tailwind.css'

Vue.use(VueClipboard)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
