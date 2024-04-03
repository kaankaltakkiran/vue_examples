//!Router import
import {createWebHistory, createRouter} from 'vue-router';
//!Components import
import ListProducts from '../components/ListProducts.vue';
import ListUsers from '../components/ListUsers.vue';
import SingleUser from '../components/SingleUser.vue';
import SingleProduct from '../components/SingleProduct.vue';
//!Router creation
const router=createRouter({
    history:createWebHistory(),
    routes:[
      { path: "/", component: ListProducts },
      { path: "/users", component: ListUsers},
      { path: "/user/:id", component: SingleUser},
      {path: "/product/:id",component:SingleProduct}
    ]
});
//!Router export
export default router;