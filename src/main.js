import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Bootstrap
import 'bootstrap';
import './assets/styles/main.scss';

createApp(App).use(router).mount('#app');
