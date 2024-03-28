//! store: uygulamanın genel durumunu tutar
//! store oluşturmak için defineStore fonksiyonunu kullanırız
import { defineStore } from 'pinia'

//! diğer uygulamarda kullanmak için
//! ilk parametre store adı, ikinci parametre store objesi
export const useDiaryStore = defineStore("diaryStore",{
  state:()=>({
    diary:[
      {id:1, title:"Diary 1", content:"Content 1", date:"2021-09-01", isFavorite:false},
      {id:2, title:"Diary 2", content:"Content 2", date:"2021-09-02", isFavorite:false},
      {id:3, title:"Diary 3", content:"Content 3", date:"2021-09-03", isFavorite:true},
    ],
    name:"Diary Store"
  })
})