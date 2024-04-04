// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import LoginPage from '../views/LoginPage.vue';
import { createPinia } from 'pinia'; // Pinia'yı içe aktarın
import { useAuthStore } from '../store';

const pinia = createPinia(); // Pinia'yı oluşturun
const authStore = useAuthStore(pinia); // Pinia'yı kullanarak store'u oluşturun

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: LoginPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});



export default router;
