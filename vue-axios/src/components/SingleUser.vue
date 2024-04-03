<template>
  <div class="container">
    <div class="row justify-content-center mt-4">
      <div class="col-6">
        <h1 class="alert alert-primary text-center">User</h1>
        <p v-if="loading">Loading...</p>
        <div class="alert alert-danger" v-else-if="errored">An error occurred</div>
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
          <tr v-if="!loading && !errored">
            <td>{{ user.id }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.name.firstname }}</td>
            <td>{{ user.name.lastname }}</td>
            <td>{{ user.phone }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const user = ref({});
const loading = ref(true);
const errored = ref(false);
const route = useRoute();

const fetchData = () => {
  axios.get(`https://fakestoreapi.com/users/${route.params.id}`)
    .then(response => {
      console.log(response);
      user.value = response.data;
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
