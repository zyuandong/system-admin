<script setup lang="ts">
import { ElConfigProvider } from 'element-plus';
import Layout from './layout/index.vue';
</script>

<template>
  <el-config-provider :z-index="3000">
    <Layout />
  </el-config-provider>
</template>

<style scoped lang="scss"></style>
