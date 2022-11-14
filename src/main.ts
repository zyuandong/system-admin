import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'element-plus/dist/index.css';
import { createPinia } from 'pinia';
import '@/styles/index.scss';
import router from './router';

import '@/mock';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount('#app');
