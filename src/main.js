import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Bootstrap
import 'bootstrap';
import './styles/style.scss';

createApp(App).use(router).mount('#app');
