<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
    <p>username:admin</p>
    <p>username:admin</p>
  </div>
</template>

<script setup>
import AuthService from '../services/auth.service';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const username = ref('');
const password = ref('');
const router = useRouter();
const handleLogin = async () => {
  try {
    const user = await AuthService.login({
      username: username.value,
      password: password.value
    });
    router.push('/');
  } catch (error) {
    console.error(error);
  }
};
</script>