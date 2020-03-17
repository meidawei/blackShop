import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from "vue-resource";
Vue.use(VueResource)
Vue.use(VueRouter)
// 导入单文件组件
import findMusic from './components/findMusic.vue'
import friend from './components/friend.vue'
import myMusic from './components/myMusic.vue'
import shop from './components/shop.vue'
import musicPerson from './components/musicPerson.vue'
import download from './components/download.vue'
import weather from './components/weather.vue'
// 设置为false阻止vue在启动时生成生产提示
Vue.config.productionTip = false

// 实例化路由规则
const routes = [
  // 默认访问 根目录 findMusic 重定向
  {path:'/',redirect: '/findMusic'},
  {path:'/findMusic',component: findMusic},
  {path:'/friend',component: friend},
  {path:'/myMusic',component: myMusic},
  {path:'/shop',component: shop},
  {path:'/musicPerson',component: musicPerson},
  {path:'/download',component: download},
  {path:'/weather',component: weather},
]
// 实例化VueRouter
const router = new VueRouter({
  routes
})
// 实例化Vue对象
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
