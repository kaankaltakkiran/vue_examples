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
     onMounted(() => { //componentin oluşturulduğunda çalışır.
    try {
      const response=  fetch('http://localhost:5173/api/user',{
          headers:{
            'Content-Type':'application/json'
          },
          credentials: 'include',
        });
        const content=response.json(); //response nesnesini json formatına çevirir.

        message.value=`Welcome ${content.name}`; //message değerine content.name değeri atandı.
         authStore.setAuth(true); //authStore içindeki setAuth fonksiyonu çağrıldı.
        console.log(authStore.authenticated);
    }  catch (error) {
      authStore.setAuth(false); //authStore içindeki setAuth fonksiyonu çağrıldı.
    }
     });
      return {message};
    }
  }
</script>