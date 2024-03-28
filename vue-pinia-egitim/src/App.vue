<template>
    <header>
      <img src="@/assets/pinia-logo.svg" alt="Pinia Loog" title="Pinia Logo">
      <h1>My Daily</h1>
    </header>
    <main>
     <div class="container">
     <new-diary></new-diary>
      <div class="data-area">
        <p v-if="filter === 'all'">Toplam {{ totalCount }} kayıt var</p>
        <p v-if="filter === 'favs'">Toplam {{ favCount }} kayıt var</p>
        <div>
         <!--  ilgili butona tıkladığımızda filter değişkenine değer atıyoruz. -->
          <button @click="filter='all'">Tüm Günlüklerim</button>
          <button @click="filter='favs'">Sadece Beğendiklerim</button>
        </div>
      </div>
    <!--   vfor ile storedan gelen günlük listesini dönüyoruz. -->
    <!-- vif ile filtere göre günlükleri listeliyoruz. -->
      <div class="gunluk-listesi" v-for="diary in diary" v-if="filter==='all'">
        <!-- vbind yaptın isim ile compenenteki props ismi aynı olmalı -->
        <diary-details v-bind:diarylist="diary" :key="diary.id"></diary-details>
      </div>

      <!--   vfor ile storedan gelen günlük listesini dönüyoruz. -->
      <!-- getters ile favori günlükleri alıyoruz. -->
      <div class="gunluk-listesi" v-for="diary in favs" v-if="filter==='favs'">
        <!-- vbind yaptın isim ile compenenteki props ismi aynı olmalı -->
        <diary-details v-bind:diarylist="diary" :key="diary.id"></diary-details>
      </div>
     <!--  ilk state drumunua getirmek için reset -->
      <p><button @click="diaryStore.$reset">Reset</button></p>
     </div>
    </main>
</template> 

<script>
/* refrans import ediyoruz. */
import {ref} from 'vue'
/* stores oluşturduğumuz yapıyı import ediyoruz. */
import {useDiaryStore} from './stores/DiaryStore'
/* günlük detay için import */
import DiaryDetails from './components/DiaryDetails.vue'
/* yeni günlük ekleme için import  */
import NewDiary from './components/NewDiary.vue'
/* storeToRefs import ediyoruz. */
import { storeToRefs } from 'pinia';
  export default {
  components: {
    "diary-details": DiaryDetails,
    "new-diary": NewDiary
  },
    setup(){
    /*   import ettiğimiz storu kullanmak için değişken oluşturuyoruz. */
      const diaryStore = useDiaryStore();
    /*   storeToRefs ile store değişkenlerini dışarıya çıkartıyoruz. */
      const { diary, loading, favs, totalCount, favCount } = storeToRefs(diaryStore)
      const filter = ref('all');
   /*    json ile veriyi çağırma işlemi yapıyoruz.  */
      diaryStore.fetchDiary();
    /*   return ile değişkenleri dışarıya döndürüyoruz. */
      return {
        diaryStore,
        filter,
        diary,
        loading,
        favs,
        totalCount,
        favCount
    }
  }
}
</script>

<style scoped>

</style>