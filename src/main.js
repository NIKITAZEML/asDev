import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import styles from './assets/styles/main.scss';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  styles,
  render: h => h(App)
}).$mount('#app')
