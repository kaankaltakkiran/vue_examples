<template>
      <div class="container">
    <div class="row justify-content-center mt-4">
   <div class="col-6">
  <h1 class="alert alert-primary  text-center">List Users</h1>
  <input type="text" v-model="keyword" placeholder="Search User" />
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
    <tr v-for="user in filtredUsers" :key="user.id">
      <th>{{user.id}}</th>
      <td>{{user.email}}</td>
      <td><router-link v-bind:to="'/user/'+user.id">{{user.username}}</router-link></td> 
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
      users: [],
      keyword: '',
      loading: true,
      errored: false 
    }
  },
  computed: {
    filtredUsers() {
      return this.users.filter((user) => {
        return user.username.toLowerCase().includes(this.keyword.toLowerCase());
      });
    }
  },
  created(){
    this.axios.get('https://fakestoreapi.com/users/')
    .then(response=>{
      console.log(response);
      this.users=response.data;
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