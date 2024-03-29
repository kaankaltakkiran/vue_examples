<template>
<!--   @submit.prevent : formun submit edilmesini engeller. -->
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <input v-model="data.email"  type="email" class="form-control" placeholder="Email" required>

    <input v-model="data.password"  type="password" class="form-control" placeholder="Password" required>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
  export default {
    name: 'Login',
    setup(){
  /*     reactive:Herhangi bir yerde değerini değiştirdiğinizde kullandığınız her yerde anında değerinin değiştiğini gözlemleyebildiğiniz bir değişken. */
      const data=reactive({
        email:'',
        password:'',
      });
      const router=useRouter();
      const submit= async()=>{
        await fetch('http://localhost:5173/api/login',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
       /*    seçeneğini kullanarak, tarayıcı otomatik olarak mevcut oturum çerezlerini isteklere ekleyecektir. Bu, sunucunun oturum bilgilerini almasını ve kullanıcıyı doğrulamasını sağlar. */
          credentials: 'include',
          /* JavaScript nesnesini bir JSON dizesine dönüştürür.  */
          body:JSON.stringify(data)
        });
     /*    işlem başarılı ise home sayfasına yönlendirme yapılır. */
        await router.push('/');
        console.log(data);
      }
      return {data,submit};
    }
  }
</script>