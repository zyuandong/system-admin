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
mock.onGet('/user/remove').reply(200);

/**
 * goods
 */
mock.onGet('/goods').reply(200, { goods: goods.list() });
