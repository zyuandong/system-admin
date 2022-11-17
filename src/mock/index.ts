import axios from 'axios';
import mockAdapter from 'axios-mock-adapter';
import user from './user';
import goods from './goods';

const baseURL = '/system-admin/apis/v1/mock';
const mock = new mockAdapter(axios, { onNoMatch: 'passthrough' });
// mock.restore();

/**
 * user
 */
mock.onGet(`${baseURL}/users`).reply(200, {
  data: {
    metadata: {
      filter: {},
      paginationParam: {
        page: 1,
        pageSize: 10,
        totalCount: 100,
      },
    },
    resultSet: user.userList(),
  },
  errorCode: null,
  userMessage: null,
});

mock
  .onGet('/users', { params: { searchText: 'John' } })
  .reply(200, user.userList('John'));

mock.onGet('/user/edit').reply(200);
mock.onGet('/user/add').reply(200);

const pathRegex = new RegExp(`${baseURL}/user/\\S+`);
mock.onDelete(pathRegex).reply(200);

// TODO
/**
 * - 处理 500
 * - 再次调用 /users 时，更新数据
 */

/**
 * goods
 */
mock.onGet(`${baseURL}/goods`).reply(200, {
  data: {
    metadata: {
      filter: {},
      paginationParam: {
        page: 1,
        pageSize: 10,
        totalCount: 100,
      },
    },
    resultSet: goods.list(),
  },
  errorCode: null,
  userMessage: null,
});
