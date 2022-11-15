import mock from './config';
import user from './user';
import goods from './goods';

/**
 * user
 */

mock.onGet('/users').reply(200, user.userList());
mock
  .onGet('/users', { params: { searchText: 'John' } })
  .reply(200, user.userList('John'));
mock.onGet('/user/edit').reply(200);
mock.onGet('/user/add').reply(200);
mock.onGet('/user/remove').reply(200);

/**
 * goods
 */
goods();
