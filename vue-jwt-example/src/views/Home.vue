<template>
<h1>{{message}}</h1>
</template>

<script lang="ts">
import { useAuthStore } from '@/stores/auth';
import { onMounted, ref } from 'vue';
  export default {
    name: 'Home',
    setup(){
      
      const message=ref('You are not logged in');
      const authStore = useAuthStore();
      /*  sayfa yüklendiğinde çalışır. */
     onMounted(async() => {
    try {
      const response= await fetch('http://localhost:5173/api/user',{
          headers:{
            'Content-Type':'application/json'
          },
          credentials: 'include',
        });
      /*   gelen veriler */
       /*  JSON formatından JavaScript nesnesine dönüştürülür. */
        const content= await response.json();

        message.value=`Welcome ${content.name}`;
        await authStore.setAuth(true);
        console.log(authStore.authenticated);
    }  catch (error) {
      await authStore.setAuth(false);
    }
     });
      return {message};
    }
  }
</script>