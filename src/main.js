import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './registerServiceWorker'
import interceptor from './interceptor'
//import {createAPI} from 'cube-ui'
import Vant from 'vant'
import 'vant/lib/index.css'
import create from './utils/create'
//import CartAnim from './components/CartAnim.vue'
Vue.config.productionTip = false
Vue.prototype.$create=create;

Vue.use(Vant)

//createAPI(Vue,CartAnim,['transitionend'])
const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

interceptor(app)