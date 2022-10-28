<template>
  <div id="user">
    <div class="left">left</div>
    <div class="right">
      <div class="table-container">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import axios from 'axios';
import { defineComponent, onMounted, ref } from 'vue';
export default defineComponent({
  setup() {
    let tableData = ref([]);
    onMounted(() => {
      axios.get('/users').then((res) => {
        console.log(res);
        tableData.value = res.data.users;
      });
    });

    return {
      tableData,
    };
  },
});
</script>

<style lang="scss" scoped>
#user {
  height: calc(100vh - 0.6rem);
  min-height: calc(7.68rem - 0.6rem);

  display: flex;
  .left {
    width: 200px;
    height: 100%;
    background: #fff;
  }
  .right {
    flex: 1;
    background: #fff;
    margin: 0.16rem;
    .table-container {
      margin: 0.16rem;
    }
  }
}
</style>
