// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 使用了router，js文件和vue文件可以分开
import Vue from 'vue'
import App from './App'
import router from './router'
import Button from './Button'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#components-demo',
  router,
  components: { Button },
  template: '<Button/>'
})
