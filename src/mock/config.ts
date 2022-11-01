import axios from 'axios';
import mockAdapter from 'axios-mock-adapter';

// This sets the mock adapter on the default instance
const mock = new mockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
interface user  {
  id:number,
  name:string
  address:string
}

let users: user[]=[ 
  { id: 1, name: 'John Smith',address:'北京' },
  { id: 2, name: 'Tom' ,address:'上海' },
];
mock.onGet('/users').reply(200, {
  users
});

mock.onGet('/users', { params: { searchText: 'John' } }).reply(200, {
  users: [{ id: 1, name: 'John Smith' }],
});

axios.get('/users').then(function (response) {
  console.log(response.data);
  users = response.data.users;
});

axios.get('/users', { params: { searchText: 'John' } }).then(function (res) {
  console.log(res.data);
});

mock.onGet('/user/edit').reply(config => {
  const { id, name,address } = config.params;
  users.some(u => {
    if (u.id === id) {
      u.name = name;
      u.address=address;
      return true;
    }
  });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([200, {
        code: 200,
        msg: '编辑成功'
      }]);
    }, 500);
  });
});

mock.onGet('/user/add').reply(config => {
  const { id,name,address } = config.params;
  users.push({
    id:id,
    name: name,
    address:address
  });
  console.log(users);
  return new Promise((resolve ) => {
    setTimeout(() => {
      resolve([200, {
        code: 200,
        msg: '新增成功'
      }]);
    }, 500);
  });
});

mock.onGet('/user/remove').reply(config => {
  const { id } = config.params;
  users = users.filter(u => u.id !== id);
  console.log(users);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([200, {
        code: 200,
        msg: '删除成功'
      }]);
    }, 500);
  });
});