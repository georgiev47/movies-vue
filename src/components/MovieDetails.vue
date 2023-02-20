<template>
    <h1>
        {{ DETAILS }}
    </h1>
    <div class="contents">
        <div v-if="movie" class="details-container">
            <div class="img-container">
                <img :src="movie.Poster" alt="No Poster">
            </div>
            <div class="text-container">
                <h2>Title: {{ movie.Title }}</h2>
                <div>Year: {{ movie.Year }}</div>
                <div>Released: {{ movie.Released }}</div>
                <div>Country: {{ movie.Country }}</div>
                <div>Genre: {{ movie.Genre }}</div>
                <div>Actors: {{ movie.Actors }}</div>
                <div>Plot: {{ movie.Plot }}</div>
            </div>
        </div>
        <div v-else>Loading...</div>
        <button @click="router.back()">
            <span>Back</span>
        </button>
    </div>
</template>

<script setup>
import router from '../router'
import {useRoute} from "vue-router"
import loadData from '../helpers/loadData'
import { ref, onMounted } from 'vue'
import { DETAILS } from '../helpers/constants'

const movie = ref(null)

// This is the second way to load the data: when the component is mounted to the DOM
onMounted(async () => {
    const route = useRoute();
    const data = await loadData(`http://www.omdbapi.com/?apikey=e7c8ef66&i=${route.params.id}`)
    movie.value = data
})

</script>

<style scoped lang="scss">
.contents {
    display: flex;
    flex-direction: column;
    align-items: center;

    .details-container {
        display: flex;
        justify-content: center;
        padding: 1rem;
        width: 60vw;

        .img-container {
            margin-right: 2rem;
            display: flex;
            align-items: center;
        }

        .text-container {
            text-align: left;

            div {
                font-size: 1.25rem;
                margin: 1rem 0;
            }
        }
    }

    button {
        border: 0;
        border-radius: 7px;
        color: white;
        background-color: #2c3e50;
        padding: 0.7rem 2rem;
        cursor: pointer;
        margin: 1rem 0 2rem;

        span {
            font-size: 1rem;
            font-weight: bold;
        }
    }
}
</style>
