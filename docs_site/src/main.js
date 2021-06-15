import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles.css'
import VueHighlightJS from 'vue-highlightjs'
 

Vue.config.productionTip = false
Vue.use(VueHighlightJS)


new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
