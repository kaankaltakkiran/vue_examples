
import { createApp } from 'vue'
import App from './App.vue'
//? pinia import
import pinia  from './store'

import router from "./router";
const app=createApp(App);
//!pinia use
app.use(pinia);
app.use(router);
app.mount('#app');
