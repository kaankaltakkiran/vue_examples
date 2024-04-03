//!import Vue
import { createApp } from 'vue'
//!import App.vue
import App from './App.vue'
//!import router
import router from "./routes/routes";
//!import axios
import axios from 'axios'
import VueAxios from 'vue-axios'

//!import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
//!createApp
const app=createApp(App);
//!use router
app.use(router);
//!use axios
app.use(VueAxios, axios);
app.mount('#app');
