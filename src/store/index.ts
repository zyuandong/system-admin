import { defineStore } from 'pinia';
import { Goods } from '@/types';
import { ref } from 'vue';

export const useStore = defineStore('main', () => {
  const goods = ref<Goods[]>([]);
  return { goods };
});
