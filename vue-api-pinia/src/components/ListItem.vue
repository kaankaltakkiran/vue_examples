<script setup>
const props = defineProps({
/*     app.vue dan gelen verileri almak için kullanılır */
    items: Object,
})

</script>
<template>
    <div >
        <div class="" v-for="movie in props.items" :key="movie.id">
            <div >
                <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"  alt="">
                <div>
                    <h2>
                        {{ movie.title }}
                    </h2>
                    <p>
                        {{ movie.overview }}
                    </p>
                    <span>
                        {{ movie.vote_average }}
                    </span>
                    <span >{{ movie.vote_average }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>