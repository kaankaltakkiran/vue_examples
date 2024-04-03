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
  //state içindeki verileri değiştirmek için  kullanılır 
  getters:{
    favs(){
      return this.diary.filter(diary=>diary.isFavorite) //favori olanları getirir
    },
    favCount(){
      return this.diary.filter(diary=>diary.isFavorite).length //favori olanların sayısını getirir
  },
  totalCount: (state) =>{
      return state.diary.length //tüm günlüklerin sayısını getirir
  }
  },
    //state içindeki verileri değiştirmek için  kullanılır
  actions:{
  async fetchDiary(){ //günlükleri getirir
    this.loading=true;
    const response=await fetch('http://localhost:3000/diary');
    const data=await response.json(); //json formatında veri döner
    this.diary=data; //gelen veriyi state içindeki diarye atar
    this.loading=false; 
  },
   async newDiary(diary){ //yeni günlük ekler
     this.diary.push(diary);
     const response=await fetch('http://localhost:3000/diary',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(diary) //gelen veriyi json formatına çevirir
     }).catch(err=>console.log(err));
    },
   async toggleFav(id){ //favori durumunu değiştirir
    const diary=this.diary.find(diary=>diary.id===id); //id si verilen günlüğü bulur
    diary.isFavorite=!diary.isFavorite; //favori durumunu değiştirir
    const res = await fetch("http://localhost:3000/diary/" + id, {
      
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({isFavorite: diary.isFavorite})
  }).catch((err)=>{console.log(err)});
    },
    async deleteDiary(id){ //id si verilen günlüğü siler
      this.diary=this.diary.filter(diary=>diary.id!==id)
      const response = await fetch("http://localhost:3000/diary/" + id, {
        method: 'DELETE'
    }).catch((err)=>{console.log(err)})
  }}
})