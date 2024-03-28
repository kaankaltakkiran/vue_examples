import { defineStore } from 'pinia';

export const useBigCounter = defineStore('bigCounter',{
  state:()=>({
    counter:0,
    numberCounter:0
  }),
  getters:{
    doubleCounter(){
      return this.counter*2;
    },
    counterNumber(){
      return this.numberCounter++;
    },
    counterNumberReset(){
      return this.numberCounter=0;
    }

  },
  actions:{
    increment(){
      this.counter++;
    },
    decrement(){
      this.counter--;
    },
    reset(){
      this.counter=0;
    },
    counterNumberReset(){
       this.numberCounter=0;
    },
    incrementBy(value){
      this.counter+=value;
    },
    decrementBy(value){
      this.counter-=value;
    },
    incrementByAsync(value){
      setTimeout(()=>{
        this.counter+=value;
      },1000);
    },
    decrementByAsync(value){
      setTimeout(()=>{
        this.counter-=value;
      },1000);
    },
    
  }
}); 