import Vue from 'vue'
//import App from './App.vue'
import AboutView from './AboutView.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(AboutView),
}).$mount('#app')
