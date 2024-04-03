<template>
  <div class="container">
    <div class="row justify-content-center mt-4">
      <div class="col-6">
        <h1 class="alert alert-primary text-center">List Products</h1>
        <input type="text" v-model="keyword" placeholder="Search Product" />
        <p v-if="loading">Loading...</p>
        <div class="alert alert-danger" v-else-if="errored">An error occurred</div>
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
            <th>{{ product.id }}</th>
            <td><img :src="product.image" :alt="product.title" width="100" height="100"></td>
            <td>{{ product.title }}</td> 
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.category }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
//! Başlangıç değerleri
const products = ref([]);
const keyword = ref('');
const loading = ref(true);
const errored = ref(false);
//Computed fonksiyonu ile filtreleme işlemi
const filteredProducts = computed(() => {
  return products.value.filter(product => {
    return product.title.toLowerCase().includes(keyword.value.toLowerCase());
  });
});
//Veri çekme işlemi
const fetchData = () => {
  const xhr = new XMLHttpRequest(); // XMLHttpRequest nesnesine ait open metodu AJAX isteği açmak için kullanılır.
 // XMLHttpRequest.open(method, url, async, user, password);  
  xhr.open('GET', 'https://fakestoreapi.com/products/', true);
  xhr.onreadystatechange = () => {
    /* readyState=0 ise istek başlatılmadı.
    readyState=1 ise istek açıldı.
    readyState=2 ise istek gönderildi.
    readyState=3 ise istek yüklendi.
    readyState=4 ise istek tamamlandı.
*/
    if (xhr.readyState === 4) {
      if (xhr.status === 200) { //HTTP durum kodunun 200 olması ile gerçekleştirmek olası hataları önleyecektir.
        products.value = JSON.parse(xhr.responseText);
        loading.value = false;
      } else {
        console.error('Error fetching products:', xhr.statusText);
        errored.value = true;
        loading.value = false;
      }
    }
  };
  xhr.send();
};
//Sayfa yüklendiğinde veri çekme işlemi
onMounted(() => {
  fetchData();
});
</script>