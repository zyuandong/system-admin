import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createPinia } from 'pinia';
import '@/styles/index.scss';
import router from './router';

import '@/mock/config';

const app = createApp(App);
const pinia = createPinia();

<<<<<<< HEAD
=======
app.use(ElementPlus, { zIndex: 3000 });
>>>>>>> f18548c (fix: 引入 element-Plus 样式文件)
app.use(pinia);
app.use(router);

app.mount('#app');
