<template>
  <div id="main">
    <p>父级 <span class="sp">sass</span></p>
    <!-- <com1 :title="name" :arr="[1,2,3]"></com1> -->
    <com1 :title="name" @on-click="res" ref="ref_res" ></com1>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import com1 from "./components/com-com1.vue";
const name=ref<string>("小涵");
const res=(a:number,b:String)=>{
  console.log(a,b);
}

const ref_res=ref<InstanceType<typeof com1>>();
console.log(ref_res.value?.age,ref_res.value?.open);

</script>

<style>
#main p {
  color: red;
  &:hover{color: aqua;}
  .sp {
    color: blue;
    padding-left: 20px;
  }
}
</style>
