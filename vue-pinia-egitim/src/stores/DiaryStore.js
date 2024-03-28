//! store: uygulamanın genel durumunu tutar
//! store oluşturmak için defineStore fonksiyonunu kullanırız
import { defineStore } from 'pinia'

//! diğer uygulamarda kullanmak için
//! ilk parametre store adı, ikinci parametre store objesi
export const useDiaryStore = defineStore("diaryStore",{
  state:()=>({
    diary:[
      {id:1, diary:"Diary 1", date:"2021-09-01", isFavorite:false},
      {id:2, diary:"Diary 2", date:"2021-09-02", isFavorite:true},
      {id:3, diary:"Diary 3", date:"2021-09-03", isFavorite:true},
    ]
  }),
  /* state içindeki verileri değiştirmek için  kullanılır */
  getters:{
    favs(){
    /*   diarydeki favori olanları getirir */
      return this.diary.filter(diary=>diary.isFavorite)
    },
    favCount(){
     /*  toplam favori sayısını getirir */
      return this.diary.filter(diary=>diary.isFavorite).length
  },
  totalCount: (state) =>{
     /*  toplam diary sayısını getirir */
      return state.diary.length
  }
  },
 /*  state içindeki verileri değiştirmek için  kullanılır */
  actions:{
   /*  yeni günlük ekleme */
    newDiary(diary){
     this.diary.push(diary);
    },
   /*  fav için */
   toggleFav(id){
   /*  parametredki id ile diary bulunur */
    const diary=this.diary.find(diary=>diary.id===id);
  /*   diary durumunu değiştirme */
    diary.isFavorite=!diary.isFavorite;
    },
    /*  günlük silme */
    deleteDiary(id){
      /*  id si verilen diaryi siler */
      this.diary=this.diary.filter(diary=>diary.id!==id)
  }
  }
})