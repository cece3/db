// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.filter('currency', function (value) {
  return '$' + value.toFixed(2)
})

Vue.component('alert', {
  props: ['type', 'bold', 'msg'],
  template: '<div class="alert" v-bind:class=type role="alert"><b>{{ bold }}</b> {{ msg }}</div>'
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
