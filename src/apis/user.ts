import request from '@/utils/request';

export const getUserList = (params?: any) =>
  request({
    url: '/mock/users',
    method: 'get',
    params,
  });
