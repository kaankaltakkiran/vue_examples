<template>
  <app-header></app-header>
 <router-view></router-view>
</template>

<script>
import ListProducts from "./components/ListProducts.vue"
import Header from "./components/Header.vue"
import ListUsers from "./components/ListUsers.vue"
export default{
  components:{
    "list-products": ListProducts,
    "app-header": Header,
    "list-users": ListUsers
  }
}
</script>
<style scoped>

</style>
