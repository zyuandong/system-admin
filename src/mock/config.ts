import axios from 'axios';
import mockAdapter from 'axios-mock-adapter';

// This sets the mock adapter on the default instance
const mock = new mockAdapter(axios);

export default mock;
