<script setup lang="ts">
import { Goods } from '@/types';
import { ref, useAttrs } from 'vue';
const countTotal = ref(0);
const priceTotal = ref(0);
const add = (row: Goods) => {
  countTotal.value = countTotal.value + 1;
  priceTotal.value = priceTotal.value + row.price;
};
const reduce = (row: Goods) => {
  countTotal.value = countTotal.value - 1;
  priceTotal.value = priceTotal.value - row.price;
};
const attrs = useAttrs();
console.log(attrs);
defineExpose({ add, reduce });
</script>

<template>
  <div id="count">
    <div>count:{{ countTotal }}</div>
    <div>¥:{{ priceTotal }}</div>
  </div>
</template>

<style lang="scss" scoped>
#count {
  background: #fff;
  display: flex;
  height: 100%;
  justify-content: space-between;
}
</style>
