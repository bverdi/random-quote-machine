import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter)
library.add(faQuoteLeft)
library.add(faFacebook)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
	
Vue.use(BootstrapVue)
new Vue({
  el: '#app',
  components: { App },
  render: h => h(App)
})

