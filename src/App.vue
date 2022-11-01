<script setup lang="ts">
import Layout from './layout/index.vue';
</script>

<template>
  <el-config-provider :z-index="3000">
    <Layout />
  </el-config-provider>
</template>

<style scoped lang="scss"></style>
