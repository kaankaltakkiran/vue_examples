<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="username" class="form-label">Username:</label>
        <input type="text" id="username" class="form-control" v-model.trim="form.username" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password:</label>
        <input type="password" id="password" class="form-control" v-model.trim="form.password" required>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useAuthStore } from '../store';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const form = ref({
      username: '',
      password: ''
    });

    const store = useAuthStore();
    const router = useRouter();

    const login = async () => {
      try {
        const { username, password } = form.value;
        // Eğer email admin@gmail.com ve password admin ise başarılı giriş yap
        if (username === 'admin' && password === 'admin') {
          const token = 'example_token'; // Örnek bir token
          store.login(token); // Token bilgisini geçir
          router.push('/');
          
        } else {
          throw new Error('Invalid credentials'); // Kullanıcı adı ve şifre hatalıysa hata fırlat
        }
      } catch (error) {
        console.error('Login failed:', error);
      }
    };

    return { form, login };
  }
});
</script>
