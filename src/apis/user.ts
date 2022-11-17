import request from '@/utils/request';
import type { User } from '@/types';

export const getUserList = (params?: User) =>
  request({
    url: '/mock/users',
    method: 'get',
    params,
  });

export const deleteUser = (params: User) =>
  request({
    url: `/mock/user/${params.id}`,
    method: 'delete',
  });
