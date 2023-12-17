import Vue from 'vue'
import App from './App.vue'

import 'minireset.css'
import 'normalize.css'

import '@/styles/index.scss'

import router from '@/router'

import ElementUI from '@/components/ElementUI'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
