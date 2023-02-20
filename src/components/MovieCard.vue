<template>
    <div class="card-container">
        <div class="img-container">
            <img :src="movie.Poster" alt="No Poster">
        </div>
        <div class="text-container">
            <h3>{{ movie.Title }}</h3>
            <div>
                <span class="year">{{ movie.Year }}</span>
                <span class="type">{{ movie.Type }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  movie: Object
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-container {
    margin: 1rem;
    padding: 1rem;
    border: 1px solid lightgrey;
    border-radius: 10px;
    width: 18rem;
    -webkit-box-shadow: 3px 4px 10px 5px rgba(212,212,212,0.4);
    -moz-box-shadow: 3px 4px 10px 5px rgba(212,212,212,0.4);
    box-shadow: 3px 4px 10px 5px rgba(212,212,212,0.4);
    cursor: pointer;
    display: flex;
    flex-direction: column;

    .img-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 25rem;

        img {
            border-radius: 10px 10px 0 0;
            max-height: 25rem;
            width: 18rem;
        }
    }

    .text-container {
        text-align: left;
        flex: 1;
        display: flex;
        flex-direction: column;

        div {
            margin-top: auto;

            .year {
                font-weight: bold;
                margin-right: 2rem;
            }
            
            .type {
                padding: 5px 10px;
                border: 1px solid #42b983;
                color: #42b983;
                border-radius: 5px;
            }
        }
    }
}
</style>
