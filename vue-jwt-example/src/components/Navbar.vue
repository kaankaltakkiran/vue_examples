<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="!auth">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
        </ul>
        <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="auth">
          <li class="nav-item">
            <a href="#" class="nav-link" @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import { computed } from 'vue';
export default{
  name: 'Navbar',
  setup(){
const authStore= useAuthStore();
const auth = computed(() => authStore.authenticated);
const logout=async()=>{
  await fetch('http://localhost:5173/api/logout',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    credentials: 'include',
  });
}
return {auth,logout}
  }
}
</script>