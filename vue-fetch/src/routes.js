import {createWebHistory, createRouter} from 'vue-router';

import ListProducts from './components/ListProducts.vue';
import ListUsers from './components/ListUsers.vue';

const router=createRouter({
    history:createWebHistory(),
    routes:[
      { path: "/", component: ListProducts },
      { path: "/users", component: ListUsers}
    ]
});

export default router;