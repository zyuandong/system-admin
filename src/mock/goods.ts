import mock from './config';
import { Random } from 'mockjs';
import type { Goods } from '@/types';

const totalCount = Random.integer(0, 10);

const goods: Array<Goods> = [];

for (let i = 0; i < totalCount; i++) {
  goods.push({
    id: Random.id(),
    name: Random.cword(3, 10),
    price: Random.float(0, 100, 2, 2),
    number: Random.integer(0, 100),
  });
}

export default () => {
  mock.onGet('/goods').reply(200, {
    goods,
  });

  mock.onGet('/goods/edit').reply((config) => {
    const { id, number } = config.params;
    goods.some((u) => {
      if (u.id === id) {
        u.number = number;
        return true;
      }
    });
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          200,
          {
            code: 200,
            msg: '编辑成功',
          },
        ]);
      }, 500);
    });
  });
};
