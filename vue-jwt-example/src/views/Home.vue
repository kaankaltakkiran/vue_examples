<template>
<h1>{{message}}</h1>
</template>

<script lang="ts">
  export default {
    name: 'Home',
    setup(){
      
      const message=ref('You are not logged in');
      /*  sayfa yüklendiğinde çalışır. */
     onMounted(async() => {
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
     });
      return {message};
    }
  }
</script>