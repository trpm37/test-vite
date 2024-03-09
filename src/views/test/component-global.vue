<template>
  <div id="main">
    <p>全局组件:{{ name }}</p>
    <component_global></component_global>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const name=ref<string>("小涵");

</script>

<style>

</style>
