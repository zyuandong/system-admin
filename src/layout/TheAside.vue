<template>
  <el-aside id="app-aside" width="200px">
    <el-menu router :default-active="$route.path" :ellipsis="false">
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/goods">商品管理</el-menu-item>
      <el-sub-menu index="/management">
        <template #title>管理</template>
        <el-menu-item index="/management/org">org管理</el-menu-item>
        <el-menu-item index="/management/user">用户管理</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
#app-aside {
  background-color: #fff;
}
</style>
