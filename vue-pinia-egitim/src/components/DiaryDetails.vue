<template>
         <div class="box">
          <div>
            <p>{{ diarylist.diary }}</p>
            <small class="date">{{diarylist.date}}</small>
          </div>
          <div>
            <i class="material-icons" v-bind:class="{active :diarylist.isFavorite}" @click="diaryStore.toggleFav(diarylist.id)">favorite</i>
            <i class="material-icons" @click="diaryStore.deleteDiary(diarylist.id)">delete</i>
          </div>
        </div>
</template>

<script>
import {useDiaryStore} from '../stores/DiaryStore'
  export default {
 /*    ana bileşenden gelen propsu alıyoruz. */
    props: ['diarylist'],
    setup(){
     /*  oluşturduğumuz storu çağırma */
     const diaryStore = useDiaryStore();

     return {
       diaryStore 
     }
    }
  }
</script>