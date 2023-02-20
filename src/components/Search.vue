<template>
    <h1>
      {{ SEARCH_MOVIE }}
    </h1>
    <input type="text" placeholder="Search..." v-model="searchWord">
    <!-- This is one way to load the movie data: inside the dispatched action on button click -->
    <!-- The other way is to load it when the MovieList component is mounted to the DOM. I use this method for the Details page -->
    <button @click="$store.dispatch('searchMovie', searchWord)">
        <span>Search</span>
    </button>
</template>

<script setup>
import { ref } from 'vue';
import { SEARCH_MOVIE } from '../helpers/constants'

const searchWord = ref(null)

</script>

<style scoped lang="scss">
input[type="text"] {
    font-size: 21px;
    padding: 7px 20px;
}

button {
    border: 0;
    color: white;
    background-color: #2c3e50;
    padding: 12px 20px;
    cursor: pointer;
    vertical-align: top;

    span {
        font-size: 16px;
        font-weight: bold;
    }
}
</style>
