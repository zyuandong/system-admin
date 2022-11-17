<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from './TheHeader.vue';
import TheAside from './TheAside.vue';

export default defineComponent({
  components: { TheHeader, TheAside },
});
</script>

<template>
  <div class="layout">
    <TheHeader></TheHeader>
    <el-container class="container">
      <TheAside></TheAside>
      <el-main id="app-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
#app-main {
  height: calc(100vh - 60px);
  min-height: 708px;
  overflow: auto;
  padding: 16px;
}
</style>
