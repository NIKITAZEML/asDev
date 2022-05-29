import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import vueCustomSelect from "vue-custom-select/src/CustomSelect.vue";
import axios from "axios";
Vue.component('vue-custom-select', vueCustomSelect);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')