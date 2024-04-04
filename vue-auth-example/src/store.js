import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    username: null
  }),
  actions: {
    login(token) {
      const encodedToken = btoa(token);       // Tokeni base64 ile kodla
      this.token = encodedToken;
      const decodedToken = JSON.parse(atob(encodedToken.split('.')[1]));
      this.username = decodedToken.username;
      localStorage.setItem('token', encodedToken); // Save token to localStorage
    },
    logout() {
      this.token = null;
      this.username = null;
      localStorage.removeItem('token'); // Remove token from localStorage
    },
    initialize() {
      const encodedToken = localStorage.getItem('token'); // Get token from localStorage
      if (encodedToken) {
        const decodedToken = atob(encodedToken); // Decode token
        this.login(decodedToken);
      }
    }
  }
});
