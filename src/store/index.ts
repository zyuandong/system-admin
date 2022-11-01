import { defineStore } from 'pinia';
import {Goods} from '@/apis/types';
import { ref } from 'vue';

export const useStore = defineStore('main',() => {
  const goods = ref<Goods[]>([]);
  return { goods };
});