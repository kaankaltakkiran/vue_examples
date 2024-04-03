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
import {ref} from 'vue' // ref import ediyoruz.
import {useDiaryStore} from './stores/DiaryStore' // store import ediyoruz.
import DiaryDetails from './components/DiaryDetails.vue' // günlük detayları için import ediyoruz.
import NewDiary from './components/NewDiary.vue' // yeni günlük eklemek için import ediyoruz.
import { storeToRefs } from 'pinia'; // storeToRefs import ediyoruz.
  export default {
  components: {
    "diary-details": DiaryDetails,
    "new-diary": NewDiary
  },
    setup(){
      const diaryStore = useDiaryStore(); // store kullanımı için tanımlıyoruz.
      const { diary, loading, favs, totalCount, favCount } = storeToRefs(diaryStore) // storeToRefs ile store değişkenlerini tanımlıyoruz.
      const filter = ref('all');
      diaryStore.fetchDiary(); // store içindeki fetchDiary fonksiyonunu çağırıyoruz.
      // return ile store değişkenlerini dışarıya döndürüyoruz.
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