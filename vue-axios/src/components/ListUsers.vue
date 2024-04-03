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

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
const users = ref([]);
const keyword = ref('');
const loading = ref(true);
const errored = ref(false);
const filtredUsers = computed(() => {
  return users.value.filter(user => {
    return user.username.toLowerCase().includes(keyword.value.toLowerCase());
  });
});
const fetchData = () => {
  axios.get('https://fakestoreapi.com/users/')
    .then(response => {
      console.log(response);
      users.value = response.data;
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