// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';// Pinia'yı içe aktarın
import 'bootstrap/dist/css/bootstrap.css';

//! Pinia eklemek için
import { createPinia } from 'pinia'

const app=createApp(App);
//! Pinia uygulamada kullanmak için
app.use(createPinia());
app.use(router);
app.mount('#app');

