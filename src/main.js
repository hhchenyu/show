import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import fastClick from 'fastclick'

Vue.config.productionTip = false

//调用attach方法来避免300ms延迟
fastClick.attach(document.body);

Vue.use(VueLazyload, { // 添加自定义选项
  preLoad: 1.3,
  error: require('assets/img/common/error.webp'), // 加载错误时候的图片
  loading: require('assets/img/common/loading.jpg'), // 加载中的图片
  attempt: 1,
})　


//给vue对象添加事件总线(管理所有消息通知) 用于监听
Vue.prototype.$bus=new Vue();

new Vue({
  router,
  store,
  render: function (h) { return h(App) },
}).$mount('#app')
