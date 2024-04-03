<template>
 <form @submit.prevent="sendForm">
  <div class="box">
            <div class="form-group">
                <textarea v-model="newDiary" placeholder="write diary"></textarea>
                <button>Günlüğü Kaydet</button>
            </div>
        </div>
 </form>
</template>

<script>
import {useDiaryStore} from '../stores/DiaryStore'
import {ref} from 'vue'
  export default {
    setup(){
      const diaryStore = useDiaryStore(); // store kullanımı için tanımlıyoruz.
      const newDiary = ref(''); // yeni günlük eklemek için ref tanımlıyoruz.
      const sendForm = () => { // form gönderme fonksiyonu
       if(newDiary.value.length > 0){
         diaryStore.newDiary({
          id:diaryStore.diary.length + 1,
          diary:newDiary.value,
          date:new Date().toLocaleDateString(),
          isFavorite:false
         })
       }
      }
      return { sendForm, newDiary }
    } 
  }
</script>