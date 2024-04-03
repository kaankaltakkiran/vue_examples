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
import { ref, computed,onMounted } from 'vue';
const users = ref([]);
const keyword = ref('');
const loading = ref(true);
const errored = ref(false);
const filtredUsers = computed(() => {
  return users.value.filter((user) => {
    return user.username.toLowerCase().includes(keyword.value.toLowerCase());
  });
});
const fecthData=()=>{
  fetch("https://fakestoreapi.com/users", {
    method: "GET",
    headers: {
      "Content-Type": "content/type"
    },
  }).then((response) => response.json())
    .then((function (json) {
      console.log(json);
      users.value = json;
      loading.value = false;
    }))
    .catch((function (err) {
      console.log(err);
      errored.value = true;
    }));
};
onMounted(() => {
  fecthData();
});
</script>