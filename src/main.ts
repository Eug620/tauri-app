/*
 * @Author       : Eug
 * @Date         : 2022-04-14 12:16:43
 * @LastEditTime : 2022-04-14 14:54:42
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /tauri-app/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';


createApp(App)
.use(router)
.use(Antd)
.mount('#app')
