<!--
 * @Author       : Eug
 * @Date         : 2022-04-14 16:53:57
 * @LastEditTime : 2022-04-14 18:54:23
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /tauri-app/src/views/dialog-page/index.vue
-->
<template>
  <a-card title="dialog Function">
    <a-divider orientation="left">ask</a-divider>
    <a-button type="primary" ghost @click="useAsk">click to ask</a-button>

    <a-divider orientation="left">confirm</a-divider>
    <a-button type="primary" ghost @click="useConfirm">click to confirm</a-button>

    <a-divider orientation="left">message</a-divider>
    <a-button type="primary" ghost @click="useMessage">click to message</a-button>

    <a-divider orientation="left">open</a-divider>
    <a-button type="primary" ghost @click="useOpen">click to open</a-button>

    <a-divider orientation="left">save</a-divider>
    <a-button type="primary" ghost @click="useSave">click to save</a-button>
  </a-card>
</template>

<script setup lang="ts">
import { ask, confirm, message, open, save } from "@tauri-apps/api/dialog";
import { writeText } from "@tauri-apps/api/clipboard";

import { notification } from "ant-design-vue";

const useAsk = async () => {
  try {
    await ask(
      "没什么卵用的message",
      "一句简单的title" // 可选
    );
  } catch {
    console.log("打开失败");
  } finally {
    console.log("useAsk end.");
  }
};

// 确认框
const useConfirm = async () => {
  try {
    let status = await confirm("确认的信息", "可选的标题");
    notification.success({
      message: `你选择了 ${status ? "Ok" : "Cancel"}`,
      placement: "bottomRight"
    });
  } catch {
    notification.error({
      message: "useConfirm 失败",
      placement: "bottomRight"
    });
  } finally {
    console.log("useConfirm end.");
  }
};

// 提示信息 - 只可确认
const useMessage = async () => {
  try {
    await message("一段文字");
  } catch {
    console.log("useMessage error");
  } finally {
    console.log("useMessage end");
  }
};

// 选取文件 或者目录
const useOpen = async () => {
  try {
    let path = await open({
      // defaultPath: '/', // 默认打开路径
      // directory: false, // 对话框是否为目录选择。 true 只可选择目录, false 只可选择文件
      filters: [
        {
          name: "过滤图片",
          extensions: ["png"]
        }
      ], // 根据参数过滤选取文件的类型
      multiple: true, // 多选, 多选返回数组
      // recursive: false, // 整不太懂 - 如果directory为true，则表示稍后将递归读取它。定义作用域上是否允许子目录。
      title: "选取文件?!" // 设置了没卵用?
    });
    
    if (path.length) {
      await writeText(path[0])
    }
    
    notification.success({
      message: `你选择了 ${path}`,
      placement: "bottomRight"
    });
  } catch {
    notification.error({
      message: "useOpen 失败",
      placement: "bottomRight"
    });
  } finally {
    console.log("useOpen end");
  }
};

// 保存的文件路径 - 提供给用户选择
const useSave = async () => {
  try {
    let path = await save({
      // defaultPath: '/'
      // filters: [
      //   {
      //     name: "过滤图片",
      //     extensions: ["png"]
      //   }
      // ], // 同上
      title: '没用的title'
    });
    notification.success({
      message: `你选择了 ${path}`,
      placement: "bottomRight"
    });
  } catch {
    notification.error({
      message: "useSave 失败",
      placement: "bottomRight"
    });
  } finally {
    console.log("useSave end");
  }
};
</script>

<style>
</style>