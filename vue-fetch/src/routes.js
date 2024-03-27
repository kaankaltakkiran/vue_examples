import {createWebHistory, createRouter} from 'vue-router';

import ListProducts from './components/ListProducts.vue';
import ListUsers from './components/ListUsers.vue';
import SingleUser from './components/SingleUser.vue';

const router=createRouter({
    history:createWebHistory(),
    routes:[
      { path: "/", component: ListProducts },
      { path: "/users", component: ListUsers},
      { path: "/user/:id", component: SingleUser,}
    ]
});

export default router;