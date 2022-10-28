<script lang="ts">
import { defineComponent } from 'vue';
import HeaderLayout from './Header.vue';

export default defineComponent({
  components: { HeaderLayout },
});
</script>

<template>
  <div class="layout">
    <HeaderLayout></HeaderLayout>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
