<!-- components/NavBar.vue -->
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand">My App</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li v-if="!isAuthenticated" class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li v-if="isAuthenticated" class="nav-item">
            <button @click="logout" class="btn btn-link nav-link">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useAuthStore } from '../store';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const store = useAuthStore();
    const route = useRoute();
    const router = useRouter();

    const isAuthenticated = computed(() => !!store.token);

    const logout = () => {
      store.logout();
      router.push('/login');
    };

    return { isAuthenticated, logout };
  }
});
</script>
