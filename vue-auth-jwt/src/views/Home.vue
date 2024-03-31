<template>
  <div>
    <h2>Welcome</h2>
    <p v-if="user">Logged in as: admin</p>
    <p v-if="accessToken">Token: {{ accessToken }}</p>
    <button v-if="user" @click="handleLogout">Logout</button>
    <p v-else>You are not logged in.</p>
  </div>
</template>

<script>
import AuthService from '../services/auth.service';

export default {
  data() {
    return {
      user: AuthService.getCurrentUser(),
      accessToken: AuthService.getCurrentUser() ? AuthService.getCurrentUser().accessToken : null
    };
  },
  methods: {
    handleLogout() {
      AuthService.logout();
      this.$router.push('/login');
    }
  }
};
</script>
