/* sotre oluşturmak için defineStore */
import { defineStore } from "pinia";
/* MovieService.js dosyasından gelen api ve apiKey bilgilerini kullanmak için import edildi */
import MovieService from "../services/MovieService";
/* store tanımlama ve dışarda kullanmak için export */
export const useMovieStore = defineStore({
/*   benzersiz isim verilecek: "movie", */
  id: "movie",
 /*  başlangıç durumları */
  state: () => ({
    movies: [],
    loading: false,
    search: "",
  }),
  /* veri çekme işlemleri  */
  actions: {
    getTopRatedMovies() {
      this.loading = true;
      MovieService.topRated()
      /* movies==response */
        .then((movies) => {
          if (movies.data) {
            console.log(movies);
            this.movies = movies.data.results;
            this.loading = false;
          }
        })
        .catch((error) => {
          this.loading = false;
        });
    },
  },
/*  movie başlığına göre filtreleme işlemi  */
  getters: {
    filteredMovies() {
      return this.movies.filter((movie) => {
        return movie.title.toLowerCase().includes(this.search);
      });
    },
/*   filtrelenmiş filmlerin sayısı */
    getMoviesLength() {
      return this.filteredMovies.length;
    },
    
  },
});