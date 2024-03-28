import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
//! Pinia eklemek için
import { createPinia } from 'pinia'

const app=createApp(App);
//! Pinia uygulamada kullanmak için
app.use(createPinia());
app.mount('#app');
