<!--
 * @Author       : Eug
 * @Date         : 2022-04-14 16:28:53
 * @LastEditTime : 2022-04-14 17:13:44
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /tauri-app/src/views/clipboard/index.vue
-->
<template>
  <a-card title="clipboard Function">
    <a-divider orientation="left">readText</a-divider>
    <a-button type="primary" ghost @click="useReadText">click to readText</a-button>
    <a-divider orientation="left">writeText</a-divider>
    <a-input v-model:value="writeTextValue" placeholder="Basic usage" />
    <a-button type="primary" ghost @click="useWriteText">click to writeText</a-button>
  </a-card>
</template>

<script setup lang="ts">
import { writeText, readText } from "@tauri-apps/api/clipboard";
import { notification } from "ant-design-vue";
import { ref } from "vue";

const writeTextValue = ref("");
const useReadText = async () => {
  try {
    let Texts = await readText();
    notification.success({
      message: "获取成功!",
      description: Texts,
      placement: "bottomRight"
    });
  } catch {
    notification.error({
      message: "获取失败!",
      description: "请重试",
      placement: "bottomRight"
    });
  } finally {
    console.log("The readText end.");
  }
};

const useWriteText = async () => {
  try {
    await writeText(writeTextValue.value);
    notification.success({
      message: "复制成功!",
      description: writeTextValue.value,
      placement: "bottomRight"
    });
  } catch {
    notification.error({
      message: "复制失败!",
      description: "请重试",
      placement: "bottomRight"
    });
  } finally {
    console.log("The writeText end.");
  }
};
</script>

<style>
</style>