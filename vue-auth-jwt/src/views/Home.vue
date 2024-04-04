<template>
  <div>
    <h2>Welcome</h2>
    <p v-if="user">Logged in as: admin</p>
    <p v-if="accessToken">Token: {{ accessToken }}</p>
    <button v-if="user" @click="handleLogout">Logout</button>
    <p v-else>You are not logged in.</p>
  </div>
</template>

<script setup>
import AuthService from '../services/auth.service';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const user = ref(AuthService.getCurrentUser());
const accessToken = ref(AuthService.getCurrentUser() ? AuthService.getCurrentUser().accessToken : null);
const router = useRouter();
const handleLogout = () => {
  AuthService.logout();
  router.push('/login');
};
</script>