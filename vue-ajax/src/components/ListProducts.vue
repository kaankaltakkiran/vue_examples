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
          <tr v-for="product in filtredProducts" :key="product.id">
            <th>{{ product.id }}</th>
            <td><img :src="product.image" :alt="product.title" width="100" height="100"></td>
            <td><router-link :to="'/product/' + product.id">{{ product.title }}</router-link></td> 
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.category }}</td>
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
      return this.products.filter(product => {
        return product.title.toLowerCase().includes(this.keyword.toLowerCase());
      });
    }
  },
  created() {
/*     ajax çarğısı ile veri çekme */
    const xhr = new XMLHttpRequest();
  /*   XMLHttpRequest nesnesine ait open metodu AJAX isteği açmak için kullanılır. */
/*   XMLHttpRequest.open(method, url, async, user, password); */
    xhr.open('GET', 'https://fakestoreapi.com/products/', true);
    xhr.onreadystatechange = () => {
/*       İstek başlatılmadığında readyState özelliği 0, açıldığında 1, istek gönderildiğinde 2, yüklendiğinde 3 ve tamamlandığında 4 değerini alır.
İşlemleri readyState değeri 4 ve HTTP durum kodunun 200 olması ile gerçekleştirmek olası hataları önleyecektir. */
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
        /*   İstek sonucunda dönen değerler response, responseText ve responseXML ile alınır. */
          this.products = JSON.parse(xhr.responseText);
          console.log(this.products);
          this.loading = false;
        } else {
          console.error('Error fetching products:', xhr.statusText);
          this.errored = true;
          this.loading = false;
        }
      }
    };
  /*   ajax başlatma */
    xhr.send();
  }
}
</script>

<style scoped>
</style>
