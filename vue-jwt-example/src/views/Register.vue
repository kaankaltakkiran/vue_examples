<template>
<!--   @submit.prevent : formun submit edilmesini engeller. -->
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please register</h1>
    <input v-model="data.name"  class="form-control" placeholder="Name" required>
    <input v-model="data.email" type="email" class="form-control" placeholder="Email" required>
    <input v-model="data.password" type="password" class="form-control" placeholder="Password" required>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
  export default {
    setup(){
  /*reactive:Herhangi bir yerde değerini değiştirdiğinizde kullandığınız her yerde anında değerinin değiştiğini gözlemleyebildiğiniz bir değişken. */
     const data=reactive({
        name:'',
        email:'',
        password:'',
     });
     const router=useRouter(); //router nesnesi oluşturuldu.
      const submit= ()=>{ //submit fonksiyonu oluşturuldu.
         fetch('http://localhost:5173/api/register',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(data) //data nesnesi json formatına çevrildi.
        });
         router.push('/login'); //router ile login sayfasına yönlendirildi.
        console.log(data);
      }
     return {data,submit};
    }
  }
</script>