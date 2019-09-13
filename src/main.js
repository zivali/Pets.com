import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

//fontawesome Icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner, faPaw, faBriefcaseMedical, faSearch, faThumbtack, faHome, faPhoneAlt, faCommentDots, faVenusMars, faTag, faStar} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faSpinner, faPaw, faGithub, faBriefcaseMedical, faSearch, faThumbtack, faHome, faPhoneAlt, faCommentDots, faVenusMars, faTag, faStar)


//infinite loading
import InfiniteLoading from 'vue-infinite-loading';
Vue.use(InfiniteLoading);

//vue-router
import router from './router/router.js'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
