<template>
    <h1>
        {{ MOVIES }}
    </h1>
    <div class="movie-container">
        <MovieCard 
            v-for="movie in $store.state.resultMovieList" 
            :key="movie.imdbID"
            @click="showDetails(movie.imdbID)"
            :movie="movie"
        />
    </div>
</template>

<script setup>
import router from '../router'
import MovieCard from '../components/MovieCard.vue'
import { MOVIES } from '../helpers/constants'

function showDetails(id) {
    router.push({ path: `movies/${id}` })
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.movie-container {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 13vw;
}
</style>
