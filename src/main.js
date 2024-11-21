import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

const app = createApp(App);

// Регистрируем глобальные компоненты, если они есть
app.use(router);
app.use(store);

// Монтируем приложение
app.mount('#app');