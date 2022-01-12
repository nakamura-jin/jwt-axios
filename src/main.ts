import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueComposionApi from '@vue/composition-api'
import '@/lib/axios'
// import VueStripeCheckout from '@vue-stripe/vue-stripe'


import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import ja from 'vee-validate/dist/locale/ja.json'

// 全てのルールをインポート

for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation
  });
}

// 日本語に設定
localize('ja', ja);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);


Vue.config.productionTip = false

Vue.use(VueComposionApi);
// Vue.use(VueStripeCheckout, process.env.STRIPE_PUBLIC_KEY);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
