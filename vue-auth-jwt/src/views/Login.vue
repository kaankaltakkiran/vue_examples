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

<script>
import AuthService from '../services/auth.service';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async handleLogin() {
      try {
        const user = await AuthService.login({
          username: this.username,
          password: this.password
        });
        this.$router.push('/');
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
