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

<script>
export default {
data() {
  return {
    product: [],
    id: this.$route.params.id,
    keyword: '',
    loading: true,
    errored: false 
  }
},
created(){
  this.axios.get('https://fakestoreapi.com/products/'+this.id)
    .then(response=>{
      console.log(response);
      this.product=response.data;
    })
    .catch(error=>{
      console.log(error);
      this.errored = true;
    })
    .finally(()=>{
      console.log('Request completed');
      this.loading = false;
    })
}
}
</script>

<style scoped>
</style>

