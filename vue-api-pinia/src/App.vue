<script setup>
import { onMounted, defineAsyncComponent, reactive, watch } from 'vue';
/* alnızca ihtiyaç duyulduğunda yüklenmesini sağlar */
const ListItem = defineAsyncComponent(() => import('./components/ListItem.vue'));
/* store oluşturulduktan sonra store içerisindeki fonksiyonları kullanabilmek için store import edilir */
import { useMovieStore } from './stores/movie';
const movieStore = useMovieStore();
/* ekran yüklendiğinde  filmleri getirir  */
onMounted(() => {
    movieStore.getTopRatedMovies();
})
/* aranan veriyi reactive ile izler ve değişiklik olduğunda store içerisindeki search fonksiyonunu çalıştırır  */
const state = reactive({ searchMovie: "" })
watch(() => state.searchMovie, (searchValue) => {
    movieStore.search = searchValue;
},
)

</script>
<template>
    <div>

        <div >
            <div>
                <h2>
                    {{ movieStore.getMoviesLength }} adet film listelendi.
                </h2>
            </div>
            <div>
                <input type="text" placeholder="film ara..." v-model="state.searchMovie"
                    >
            </div>
        </div>
        <ListItem :items="movieStore.filteredMovies" v-if="!movieStore.loading" />
    </div>
</template>
<style scoped>

</style>