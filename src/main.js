import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"

import Fastclick from "fastclick"
import VueLazyLoad from 'vue-lazyload'

import toast from "components/common/toast/index.js"

Vue.config.productionTip = false

//安装toast插件
Vue.use(toast)
//解决移动端300ms延迟
Fastclick.attach(document.body)
//使用懒加载的插件
Vue.use(VueLazyLoad, {
  loading: require("./assets/img/home/lazyload.jpg")
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
