<template>
  <div class="container">
  <div class="row justify-content-center mt-4">
 <div class="col-6">
<h1 class="alert alert-primary  text-center">Product</h1>
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
  <tr>
    <th>{{product.id}}</th>
    <td><img :src="product.image" alt="product.title" width="100" height="100"></td>
    <td>{{product.title}}</td>
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
import { useRoute } from 'vue-router';
const product = ref({});
const id = ref('');
const keyword = ref('');
const loading = ref(true);
const errored = ref(false);
const route = useRoute();
const fetchData = () => {
  fetch(`https://fakestoreapi.com/products/${route.params.id}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      product.value = data;
      loading.value = false;
    })
    .catch(error => {
      console.error(error);
      errored.value = true;
    });
};
onMounted(() => {
  fetchData();
});
</script>