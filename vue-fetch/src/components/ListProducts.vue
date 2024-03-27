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
    <tr v-for="product in filtredProducts" :key="product.id">
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

<script>
export default {
  data() {
    return {
      products: [],
      keyword: '',
      loading: true,
      errored: false 
    }
  },
  computed: {
    filtredProducts() {
      return this.products.filter((product) => {
        return product.title.toLowerCase().includes(this.keyword.toLowerCase());
      });
    }
  },
  created(){
    // instance bilgilerini al 
    var self = this;
    fetch("https://fakestoreapi.com/products", {
      method: "GET",
      headers: {
        "Content-Type": "content/type"
      },
    }).then((response) => response.json())
      .then((function (json) {
        console.log(json);
        self.products = json;
        self.loading = false;
      }))
      .catch((function (err) {
        console.log(err);
        self.loading = false;
        self.errored = true;
      }));
  }
}
</script>

<style scoped>
</style>

