<!--
 * @Author       : Eug
 * @Date         : 2022-04-14 18:28:14
 * @LastEditTime : 2022-04-14 18:59:24
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /tauri-app/src/views/fs-page/index.vue
-->
<template>
  <a-card title="fs Function">
    <a-divider orientation="left">copyFile</a-divider>
    <a-form
      :model="copyFileForm"
      name="basic"
      :label-col="{ span: 6 }"
      autocomplete="off"
      labelAlign="left"
    >
      <a-form-item
        label="source"
        name="source"
      >
        <a-input v-model:value="copyFileForm.source" />
      </a-form-item>
      <a-form-item
        label="destination"
        name="destination"
      >
        <a-input v-model:value="copyFileForm.destination" />
      </a-form-item>
    </a-form>
    <a-button type="primary" ghost @click="useCopyFile">click to copyFile</a-button>
  </a-card>
</template>

<script setup lang="ts">
import { copyFile } from "@tauri-apps/api/fs";
import { reactive } from 'vue'
const copyFileForm = reactive({
  source: '',
  destination: '',
  options: {
    
  }
})
const useCopyFile = async () => {
  try {
    let res = await copyFile(
      copyFileForm.source, 
      copyFileForm.destination, 
      copyFileForm.options
      );
      console.log(res, '????');
      
  } catch {
    console.log('useCopyFile error');
    
  }
};
</script>

<style>
</style>