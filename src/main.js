import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store'; // Импортируем store

const app = createApp(App);
app.use(router); // Подключаем роутер
app.use(store); // Подключаем Vuex Store
app.mount('#app');