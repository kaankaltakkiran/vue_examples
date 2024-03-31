import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    username: null
  }),
  actions: {
    login(token) {
      // Tokeni base64 ile kodla
      const encodedToken = btoa(token);
      
      this.token = encodedToken;

      // Decode token to get user information
      const decodedToken = JSON.parse(atob(encodedToken.split('.')[1]));
      this.username = decodedToken.username;

      // Save token to localStorage
      localStorage.setItem('token', encodedToken);
    },
    logout() {
      this.token = null;
      this.username = null;

      // Clear token from localStorage
      localStorage.removeItem('token');
    },
    // Initialize state from localStorage if token exists
    initialize() {
      const encodedToken = localStorage.getItem('token');
      if (encodedToken) {
        // Decode token to get original token
        const decodedToken = atob(encodedToken);
        this.login(decodedToken);
      }
    }
  }
});
