import { createApp } from 'vue';
import App from './App.vue';
import router from '../src/router/router.js';
import './index.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
// createApp(App).mount('#app')
