import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

const app = createApp(App);

// Загружаем данные корзины при старте приложения
store.dispatch('loadCart');
store.dispatch('loadWishlist');

app.use(store);
app.use(router);
app.mount('#app');