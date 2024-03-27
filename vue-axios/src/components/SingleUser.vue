<template>
  <div class="container">
<div class="row justify-content-center mt-4">
<div class="col-6">
<h1 class="alert alert-primary  text-center">User</h1>
<p v-if="loading">Loading...</p>
<div class="alert alert-danger " v-else-if="errored">An error occurred</div>
</div>

<table class="table table-striped">
<thead>
<tr>
  <th>id</th>
  <th>email</th>
  <th>username</th>
  <th>firstname</th>
  <th>lastname</th>
  <th>phone</th>
</tr>
</thead>
<tbody>
<tr>
  <th>{{user.id}}</th>
  <td>{{user.email}}</td>
  <td>{{user.username}}</td>
  <td>{{user.name.firstname}}</td>
  <td>{{user.name.lastname}}</td>
  <td>{{ user.phone}}</td>
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
  user: [],
  id: this.$route.params.id,
  loading: true,
  errored: false 
}
},
created(){
  this.axios.get('https://fakestoreapi.com/users/'+this.id)
    .then(response=>{
      console.log(response);
      this.user=response.data;
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