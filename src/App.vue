<template>
  <router-link to="/baseFun" class="router">基础</router-link>
  <router-link to="/computed" class="router">计算属性</router-link>
  <router-link to="/watch" class="router">监控</router-link>
  <router-link to="/slot" class="router">插槽</router-link>
  <router-link to="/comGlobal" class="router">全局组件</router-link>
  <router-link to="/comIs" class="router">动态组件</router-link>
  <router-link to="/comVal" class="router">组件传值</router-link>
  <router-link to="/callback" class="router">生命周期</router-link>
  <el-container class="main">
    <el-header>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-sub-menu index="2">
          <template #title>测试</template>
          <el-menu-item index="2-1">
            <router-link to="/baseFun">基础</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link to="/computed">计算属性</router-link>
          </el-menu-item>
          <el-menu-item index="2-3">
            <router-link to="/watch">监控</router-link>
          </el-menu-item>
          <el-menu-item index="2-4">
            <router-link to="/slot">插槽</router-link>
          </el-menu-item>
          <el-menu-item index="2-5">
            <router-link to="/comGlobal">全局组件</router-link>
          </el-menu-item>
          <el-menu-item index="2-6">
            <router-link to="/comIs">动态组件</router-link>
          </el-menu-item>
          <el-menu-item index="2-7">
            <router-link to="/comVal">组件传值</router-link>
          </el-menu-item>
          <el-menu-item index="2-8">
            <router-link to="/callback">生命周期</router-link>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3" disabled>关于</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeIndex2 = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped>
.el-header {
  padding: 0;
}
a{color: #fff;}
.router{color: #000; padding-right: 12px;}
</style>
