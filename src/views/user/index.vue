<template>
  <div id="user">
    <div class="left">left</div>
    <div class="right">
      <div class="btn">
        <el-button type="primary" plain @click="handleCreate">新增</el-button>
      </div>
      <div class="table-container">
        <el-table height="100%" :data="tableData">
          <el-table-column type="index" label="Index" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
          <el-table-column fixed="right" label="Operations" width="120">
            <template #default="{ row }">
              <el-button
                link
                type="primary"
                size="small"
                @click="handleDelete(row)"
                >删除</el-button
              >
              <el-button
                link
                type="primary"
                size="small"
                @click="handleEdit(row)"
                >修改</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!-- 修改表单 -->
    <userForm
      ref="test"
      :visible="visibleUserForm"
      @close="close"
      :form="form"
      :getTableData="getTableData"
      :isEdit="isEdit"
      class="test"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue';
import userForm from './components/userForm.vue';
import type { User } from '@/types';
import { ElMessage, ElMessageBox } from 'element-plus';
import { getUserList, deleteUser } from '@/apis/user';

export default defineComponent({
  components: {
    userForm,
  },
  setup() {
    let tableData = ref([]);

    interface Userform {
      visibleUserForm: boolean;
      form: User;
      isEdit: boolean;
    }
    const userForm = reactive<Userform>({
      visibleUserForm: false,
      form: {} as User,
      isEdit: false,
    });
    const handleEdit = (row: User) => {
      userForm.visibleUserForm = true;
      userForm.form = row;
      userForm.isEdit = true;
    };
    const close = () => {
      userForm.visibleUserForm = false;
    };
    let test = ref();
    const getTableData = () => {
      getUserList()
        .then((res) => {
          const { resultSet } = res.data.data;
          tableData.value = resultSet;
        })
        .catch();
    };
    const handleDelete = (row: User) => {
      ElMessageBox.confirm('删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          deleteUser(row)
            .then(() => {
              ElMessage({
                type: 'success',
                message: '删除成功',
              });
              getTableData();
            })
            .catch();
        })
        .catch();
    };
    const handleCreate = () => {
      userForm.visibleUserForm = true;
      userForm.form = {} as User;
      userForm.isEdit = false;
    };
    onMounted(() => {
      getTableData();
    });

    return {
      tableData,
      handleEdit,
      // visibleUserForm,
      close,
      ...toRefs(userForm),
      test,
      getTableData,
      handleDelete,
      handleCreate,
    };
  },
});
</script>

<style lang="scss" scoped>
#user {
  height: 100%;
  display: flex;

  .left {
    width: 200px;
    height: 100%;
    background: #fff;
    margin-right: 0.16rem;
    overflow: auto;
  }
  .right {
    flex: 1;
    overflow: hidden;
    background: #fff;
    .btn {
      margin: 0.16rem 0.16rem 0;
      text-align: end;
    }
    .table-container {
      height: calc(100% - 0.16rem - 0.32rem - 0.32rem);
      margin: 0.16rem;
    }
  }
  .test {
    background-color: aqua;
  }
}
</style>
