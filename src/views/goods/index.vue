<script setup lang="ts">
import { Goods } from '@/types';
import axios from 'axios';
// import { useStore } from '@/store/index';
import { onMounted, ref } from 'vue';
import count from './components/count.vue';
import { getGoodsList } from '@/apis/goods';

const handleAdd = (row: Goods) => {
  axios.get('/goods/edit', { params: row.number++ }).then(() => {
    // console.log(res);
    countApp.value.add(row);
  });
};
const handleReduce = (row: Goods) => {
  axios.get('/goods/edit', { params: row.number-- }).then(() => {
    // console.log(res);
    countApp.value.reduce(row);
  });
};

const tableData = ref<Goods[]>([]);

const getTableData = () => {
  getGoodsList()
    .then((res) => {
      const { resultSet } = res.data.data;
      tableData.value = resultSet;
    })
    .catch();
};

const countApp = ref();
onMounted(() => {
  getTableData();

  // console.log(countApp.value);
});
</script>

<template>
  <div id="goods">
    <div class="table-container">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="Index" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="price" label="Price" />
        <el-table-column prop="number" label="Number" />
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default="{ row }">
            <el-button link type="primary" size="small" @click="handleAdd(row)"
              >加</el-button
            >
            <el-button
              link
              type="primary"
              size="small"
              @click="handleReduce(row)"
              >减</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="count">
      <count ref="countApp" class="countApp" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#goods {
  height: calc(100vh - 0.6rem);
  min-height: calc(7.68rem - 0.6rem);

  .table-container {
    height: 80%;
    padding-top: 0.16rem;
    margin-bottom: 0.16rem;
    background: #fff;
  }
  .count {
    height: calc(100% - 80% - 0.32rem);
  }
  .countApp {
    background-color: aquamarine;
  }
}
</style>
