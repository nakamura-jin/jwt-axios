import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueComposionApi from '@vue/composition-api'
import '@/lib/axios'

Vue.config.productionTip = false

Vue.use(VueComposionApi);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
