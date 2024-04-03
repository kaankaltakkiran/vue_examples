<template>
    <div class="container">
    <div class="row justify-content-center mt-4">
   <div class="col-6">
  <h1 class="alert alert-primary  text-center">List Products</h1>
  <input type="text" v-model="keyword" placeholder="Search Product" />
  <p v-if="loading">Loading...</p>
<div class="alert alert-danger " v-else-if="errored">An error occurred</div>
</div>
  <table class="table table-striped">
  <thead>
    <tr>
      <th>id</th>
      <th>image</th>
      <th>title</th>
      <th>description</th>
      <th>price</th>
      <th>category</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in filteredProducts" :key="product.id">
      <th>{{product.id}}</th>
      <td><img :src="product.image" alt="product.title" width="100" height="100"></td>
      <td><router-link v-bind:to="'/product/'+product.id">{{product.title}}</router-link></td> 
      <td>{{product.description}}</td>
      <td>{{product.price}}</td>
      <td>{{ product.category}}</td>
    </tr>
  </tbody>
</table>
</div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

const products = ref([]);
const keyword = ref('');
const loading = ref(true);
const errored = ref(false);

const filteredProducts = computed(() => {
  return products.value.filter(product => {
    return product.title.toLowerCase().includes(keyword.value.toLowerCase());
  });
});

const fetchData = () => {
  axios.get('https://fakestoreapi.com/products/')
    .then(response => {
      console.log(response);
      products.value = response.data;
    })
    .catch(error => {
      console.error(error);
      errored.value = true;
    })
    .finally(() => {
      console.log('Request completed');
      loading.value = false;
    });
};

onMounted(() => {
  fetchData();
});
</script>
