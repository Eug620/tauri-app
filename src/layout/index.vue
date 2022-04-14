<!--
 * @Author       : Eug
 * @Date         : 2022-04-14 14:39:46
 * @LastEditTime : 2022-04-14 18:21:41
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /tauri-app/src/layout/index.vue
-->
<script setup lang="ts">
import Menu from './Menu.vue'
import { listen, once } from '@tauri-apps/api/event'
listen('eventPage', (val: any)  => {
  console.log('layout -> 来自eventPage', val);
})
once('eventPageOnce', (val: any)  => {
  console.log('layout -> 来自eventPageOnce', val);
})
</script>

<template>
  <a-layout>
    <a-layout-header>Header</a-layout-header>
    <a-layout>
      <a-layout-content>
        <router-view v-slot="{ Component, route }">
          <template v-if="route.meta.keepAlive">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </template>
          <template v-else>
            <component :is="Component" />
          </template>
        </router-view>
      </a-layout-content>
      <a-layout-sider>
        <Menu/>
      </a-layout-sider>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<style lang="scss">
@mixin over-flow-scroll{
  overflow: scroll;
}
.ant-layout {
  height: 100vh;
}
.ant-layout-content {
  background-color: #fff;
  @include over-flow-scroll;
  padding: 20px;
}
.ant-layout-sider {
  background: #f7f7f7;
  @include over-flow-scroll;
}
.ant-layout-header {
  background: #e4e0e7;
}
</style>
