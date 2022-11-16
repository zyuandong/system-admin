import request from '@/utils/request';

export const getGoodsList = (params?: any) =>
  request({
    url: '/mock/goods',
    method: 'get',
    params,
  });
