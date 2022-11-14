<template>
  <div>
    <el-dialog
      :model-value="visible"
      title="用户表单"
      width="30%"
      :before-close="handleClose"
    >
      <el-form :model="tableForm" label-width="60px">
        <el-form-item label="姓名">
          <el-input v-model="tableForm.name" />
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="tableForm.address" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClose">取消</el-button>
          <el-button type="primary" @click="handleSubmit"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import axios from 'axios';
import { computed, defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { User } from '@/types/index';

export default defineComponent({
  emits: ['close'],
  props: {
    visible: Boolean,
    form: {
      type: Object as PropType<User>,
    },
    getTableData: { type: Function, required: true },
    isEdit: Boolean,
  },
  setup(props, { emit, expose }) {
    const dialogVisible = computed<boolean>(() => {
      return props.visible;
    });
    const tableForm = computed(() => props.form as User);

    const handleClose = () => {
      emit('close', false);
    };
    const handleSubmit = () => {
      if (props.isEdit) {
        axios.get('/user/edit', { params: props.form }).then(() => {
          emit('close', false);
          props.getTableData();
        });
      } else {
        axios
          .get('/user/add', { params: { id: 3, ...props.form } })
          .then(() => {
            emit('close', false);
            props.getTableData();
          });
      }
    };
    expose({ handleClose });
    return {
      dialogVisible,
      handleClose,
      handleSubmit,
      tableForm,
    };
  },
});
</script>
