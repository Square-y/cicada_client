import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
// 全局引入axios，并进行全局注册
// import axios from 'axios'
// Vue.prototype.$axios = axios


// App.use(api)
const app = createApp(App)
//axios 关联到vue实例对象的全局属性中
// app.config.globalProperties.$axios=axios
//或者
//app.config.globalProperties.$http=axios
app.use(router)
app.mount('#app')












