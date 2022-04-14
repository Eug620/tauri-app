/*
 * @Author       : Eug
 * @Date         : 2022-04-14 12:16:43
 * @LastEditTime : 2022-04-14 14:39:12
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /tauri-app/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '/@': resolve(__dirname, 'src'),
      '/#': resolve(__dirname),
    }
  },
})
