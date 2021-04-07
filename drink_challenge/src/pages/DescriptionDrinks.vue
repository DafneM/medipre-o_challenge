<template>
   <main>
        <section class="container">
        <div class="drinks">
            <div v-for="(drink,index) in drinks" class="drink"  :key=index>
                    <img id="imageDrink" :src="drink.strDrinkThumb" :alt="drink.strDrink">
                    <h1>{{drink.strDrink}}</h1>
                    <p>#{{$route.params.drinkId}}</p>
            </div>
        </div>
        </section>
    </main>
</template>

<script>
import api from '@/services/api.js';
export default {
    name: "DescriptionDrinks",
    data(){
        return {
            drinks: [],
        }
    },
    mounted(){
        api.get(`/lookup.php?i=${this.$route.params.drinkId}`).then(response => {
            this.drinks = response.data.drinks;
            console.log(response.data.drinks);
        });
    }
}
</script>

<style>

</style>