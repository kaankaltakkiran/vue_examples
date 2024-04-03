//!import Vue
import { createApp } from 'vue'
//!import App.vue
import App from './App.vue'
//!import router
import router from "./routes/routes";

//!import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
//!createApp
const app=createApp(App);
//!use router
app.use(router);
app.mount('#app');
