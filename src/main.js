// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Trend from 'vuetrend'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import VueResource from 'vue-resource'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.filter('currency', function (value) {
  return '$' + value.toFixed(2)
})

Vue.use(Trend)
Vue.use(VueChartkick, { Chartkick })
Vue.use(VueResource)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCRszFuoL7Wk2wZrbYuWPn2ESgIX_PCQ3s'
  }
})

Vue.http.options.emulateHTTP = true
Vue.http.options.crossOrigin = true
// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'

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
