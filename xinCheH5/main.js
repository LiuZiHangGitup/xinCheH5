import Vue from 'vue'
import App from './App'
import { toast, goWindow ,loading } from '@/common/utils.js'

Vue.config.productionTip = false
Vue.prototype.$toast = toast;
Vue.prototype.$goWindow = goWindow;
Vue.prototype.$loading = loading;
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
