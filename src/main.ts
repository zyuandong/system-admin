import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';
import '@/styles/index.scss';
import router from './router';


import '@/mock/config';

const app = createApp(App);
const pinia = createPinia();

app.use(ElementPlus, { size: 'small', zIndex: 3000 });
app.use(pinia);
app.use(router);

app.mount('#app');
