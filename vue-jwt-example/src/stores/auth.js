import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    authenticated: false
  }),
  getters:{
    isAuthenticated(){
      return this.authenticated;
    }
  },
  actions: {
    setAuth(auth) {
      this.authenticated = auth;
    }
  }
});
