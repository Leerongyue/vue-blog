// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import Util from './helpers/util'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(Antd)
Vue.use(Util)
Vue.use(ElementUI)
Vue.config.productionTip = false



new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})




