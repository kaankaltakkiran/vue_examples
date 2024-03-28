<template>
        
  <p>Counter: {{counter }}</p>
  <button @click="bigCounter.increment">Increment</button>
  <button @click="bigCounter.decrement">Decrement</button>
  <button @click="bigCounter.reset">Reset</button>
  <button @click="bigCounter.incrementBy(5)">+5</button>
  <button @click="bigCounter.decrementBy(5)">-5</button>
  <button @click="bigCounter.incrementByAsync(5)">async +5</button>
  <button @click="bigCounter.decrementByAsync(5)">async -5 </button>

<p> Click Number: {{ counterNumber }}</p>
<button @click="bigCounter.counterNumberReset">Reset</button>
  <p>Double Counter: {{doubleCounter }}</p>

</template>

<script>
import {useBigCounter} from './stores/BigCounter'
import { storeToRefs } from 'pinia';
  export default {
    setup() {
     const bigCounter= useBigCounter();
     const {counter,numberCounter,counterNumber,doubleCounter}=storeToRefs(bigCounter)
      return {bigCounter,counter,numberCounter,counterNumber,doubleCounter}
  }
}
</script>
