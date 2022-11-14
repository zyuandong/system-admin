import mock from './config';
import { Random } from 'mockjs';
import type { User } from '@/types/index';

const totalCount = Random.natural(0, 100);

let users: Array<User> = [];

for (let i = 0; i < totalCount; i++) {
  users.push({
    id: Random.id(),
    name: Random.cname(),
    address: Random.county(true),
  });
}

export default (): void => {
  // Mock any GET request to /users
  // arguments for reply are (status, data, headers)
  mock.onGet('/users').reply(200, {
    users,
  });

  mock.onGet('/users', { params: { searchText: 'John' } }).reply(200, {
    users: [{ id: 1, name: 'John Smith' }],
  });

  mock.onGet('/user/edit').reply((config) => {
    const { id, name, address } = config.params;
    users.some((u) => {
      if (u.id === id) {
        u.name = name;
        u.address = address;
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

  mock.onGet('/user/add').reply((config) => {
    const { id, name, address } = config.params;
    users.push({
      id: id,
      name: name,
      address: address,
    });
    console.log(users);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          200,
          {
            code: 200,
            msg: '新增成功',
          },
        ]);
      }, 500);
    });
  });

  mock.onGet('/user/remove').reply((config) => {
    const { id } = config.params;
    users = users.filter((u) => u.id !== id);
    console.log(users);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          200,
          {
            code: 200,
            msg: '删除成功',
          },
        ]);
      }, 500);
    });
  });
};

// axios.get('/users').then(function (response) {
//   console.log(response.data);
//   users = response.data.users;
// });

// axios.get('/users', { params: { searchText: 'John' } }).then(function (res) {
//   console.log(res.data);
// });
