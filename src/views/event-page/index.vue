<!--
 * @Author       : Eug
 * @Date         : 2022-04-14 17:56:33
 * @LastEditTime : 2022-04-14 18:40:48
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /tauri-app/src/views/event-page/index.vue
-->
<template>
  <a-card title="event Function">
    <a-divider orientation="left">emit</a-divider>
    <a-button type="primary" ghost @click="useEmit">click to emit</a-button>

    <a-divider orientation="left">emit once</a-divider>
    <a-button type="primary" ghost @click="useEmitOnce">click to emit once</a-button>
  </a-card>
</template>

<script setup lang="ts">
import { emit } from "@tauri-apps/api/event";
import { notification } from "ant-design-vue";

const useEmit = async () => {
  try {
    await emit("eventPage", { msg: "eventPage传来的信息" });
  } catch {
    notification.error({
      message: "useEmit 失败",
      placement: "bottomRight"
    });
  }
};

const useEmitOnce = async () => {
  try {
    await emit("eventPageOnce", { msg: "eventPageOnce传来的信息" });
  } catch {
    notification.error({
      message: "useEmitOnce 失败",
      placement: "bottomRight"
    });
  }
};
</script>

<style>
</style>