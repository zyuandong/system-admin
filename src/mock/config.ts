import axios from 'axios';
import mockAdapter from 'axios-mock-adapter';

// This sets the mock adapter on the default instance
const mock = new mockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('/users').reply(200, {
  users: [
    { id: 1, name: 'John Smith' },
    { id: 2, name: 'Tom' },
  ],
});

mock.onGet('/users', { params: { searchText: 'John' } }).reply(200, {
  users: [{ id: 1, name: 'John Smith' }],
});

axios.get('/users').then(function (response) {
  console.log(response.data);
});

axios.get('/users', { params: { searchText: 'John' } }).then(function (res) {
  console.log(res.data);
});
