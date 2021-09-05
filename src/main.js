import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import axios from 'axios';
import VueAxios from 'vue-axios';

if (process.env.NODE_ENV === 'development') {
  require('@mock/index');
} else {
  // alert('生产环境');
}

createApp(App).use(store).use(router).use(VueAxios, axios).use(store).use(router).use(ElementPlus).mount('#app');
