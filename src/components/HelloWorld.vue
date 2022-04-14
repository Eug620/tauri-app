<!--
 * @Author       : Eug
 * @Date         : 2022-04-14 12:16:43
 * @LastEditTime : 2022-04-14 14:29:01
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /tauri-app/src/components/HelloWorld.vue
-->
<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { writeText, readText } from "@tauri-apps/api/clipboard";
defineProps({
  msg: String
})

const count = ref(0)
const texts = ref('')

const useReadText = async() => {
  let text = await readText()
  console.log(text, '----->text');
  
}

const useWriteText = async() => {
  console.log(texts.value);
  
  await writeText(texts.value)
  console.log('writeText success');
  
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <input type="text" :value="texts" @input="v=>texts=v.target.value"/>
  <button type="button" @click="count++">count is: {{ count }}</button>
  <button @click="useReadText">readText</button>
  <button @click="useWriteText">writeText</button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
