//! store: uygulamanın genel durumunu tutar
//! store oluşturmak için defineStore fonksiyonunu kullanırız
import { defineStore } from 'pinia'

//! diğer uygulamarda kullanmak için
//! ilk parametre store adı, ikinci parametre store objesi
export const useDiaryStore = defineStore("diaryStore",{
  state:()=>({
    diary: [],
    loading:false
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
   /*  jsondan gelen version */
  /*  async çünkü paralel işlem yapılabilir */
  async fetchDiary(){
    this.loading=true;
    /*  fetch ile json dosyası getirilir */
    const response=await fetch('http://localhost:3000/diary');
    /*  json dosyası okunur */
    const data=await response.json();
    /*  json dosyasındaki verileri döndürür */
    this.diary=data;
    this.loading=false;
  },
   /*  yeni günlük ekleme */
   async newDiary(diary){
     this.diary.push(diary);
     const response=await fetch('http://localhost:3000/diary',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(diary)
     }).catch(err=>console.log(err));
    },
   /*  fav için */
   async toggleFav(id){
   /*  parametredki id ile diary bulunur */
    const diary=this.diary.find(diary=>diary.id===id);
  /*   diary durumunu değiştirme */
    diary.isFavorite=!diary.isFavorite;
    const res = await fetch("http://localhost:3000/diary/" + id, {
      
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({isFavorite: diary.isFavorite})
  }).catch((err)=>{console.log(err)});
    },
    /*  günlük silme */
    async deleteDiary(id){
      /*  id si verilen diaryi siler */
      this.diary=this.diary.filter(diary=>diary.id!==id)
      const response = await fetch("http://localhost:3000/diary/" + id, {
        method: 'DELETE'
    }).catch((err)=>{console.log(err)})

  }}
})