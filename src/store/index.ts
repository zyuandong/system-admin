import { defineStore } from 'pinia';
import { Good } from '@/types';
import { ref } from 'vue';

export const useStore = defineStore('main', () => {
  const goods = ref<Good[]>([]);
  return { goods };
});
