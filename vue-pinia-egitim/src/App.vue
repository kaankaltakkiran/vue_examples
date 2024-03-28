<template>
    <header>
      <img src="@/assets/pinia-logo.svg" alt="Pinia Loog" title="Pinia Logo">
      <h1>My Daily</h1>
    </header>
    <main>
     <div class="container">
    <!--   vfor ile storedan gelen günlük listesini dönüyoruz. -->
      <div class="gunluk-listesi" v-for="diary in diaryStore.diary">
        <!-- vbind yaptın isim ile compenenteki props ismi aynı olmalı -->
        <diary-details v-bind:diarylist="diary" :key="diary.id"></diary-details>
      </div>
     </div>
    </main>
</template> 

<script>
/* stores oluşturduğumuz yapıyı import ediyoruz. */
import {useDiaryStore} from './stores/DiaryStore'
/* günlük detay için import */
import DiaryDetails from './components/DiaryDetails.vue'
  export default {
  components: {
    "diary-details": DiaryDetails
  },
    setup(){
    /*   import ettiğimiz storu kullanmak için değişken oluşturuyoruz. */
      const diaryStore = useDiaryStore();
      return {
        diaryStore
    }
  }
}
</script>

<style scoped>

</style>