// 引入Vuex
import Vue from 'vue'
// 引入App组件
import App from './App'
// 设置浏览器中提示信息不显示------小程序的控制台
Vue.config.productionTip = false
// 设置当前程序的类型是app---小程序
App.mpType = 'app'
// 创建Vue的实例对象
const app = new Vue(App)
// 挂载
app.$mount()
