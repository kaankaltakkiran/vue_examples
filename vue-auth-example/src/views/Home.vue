<!-- views/Home.vue -->
<template>
  <div>
    <h1>Home</h1>
    <p v-if="isAuthenticated">Welcome, {{ username }}!</p>
    <p v-else>Please log in to access this page.</p>
    <p>{{ token }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '../store';

const store = useAuthStore();

const isAuthenticated = computed(() => !!store.token);
const username = computed(() => store.username);
const token = store.token;

</script>
