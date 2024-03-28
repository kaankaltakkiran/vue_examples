<template>
         <div class="box">
          <div>
            <p>{{ diarylist.title }}</p>
            <small class="date">{{diarylist.date}}</small>
          </div>
          <div>
            <i class="material-icons">favorite</i>
            <i class="material-icons">delete</i>
          </div>
        </div>
</template>

<script>
  export default {
 /*    ana bileşenden gelen propsu alıyoruz. */
    props: ['diarylist']
  }
</script>