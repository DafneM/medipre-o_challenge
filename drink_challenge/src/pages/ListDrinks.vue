<template>
    <main>
        <section class="container">
            <div class="title">
                <h1>Os melhores drinks não-acoólicos do Brasil</h1>
                <p>50 resultados encontrados</p>
            </div>
        <div class="drinks">
            <div v-for="(drink,index) in drinks" class="drink"  :key="index">
                <img id="imageDrink" :src="drink.strDrinkThumb" :alt="drink.strDrink">
                <h1>{{drink.strDrink}}</h1>
                <p>#{{drink.idDrink}}</p>
            </div>
        </div>
        </section>
    </main>
</template>

<script>
import api from '@/services/api.js';
export default {
    name: "ListDrinks",
    data(){
        return {
            drinks: []
        }
    },
    mounted(){
        api.get('filter.php?a=Non_Alcoholic').then(response => {
            this.drinks = response.data.drinks;
        });
    }
}
</script>

<style scoped>
    .container{
        display: flex;
        align-items: center;
        justify-content: center; 
        flex-direction: column;
    }
    .title{
        width: 90%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }
    .title h1{
        margin-bottom: 1%;
        font-size: 2rem;
        font-weight: 800;
        color: #252C32;
    }
    .title p{
        margin-bottom: 1%;
        color: #9AA6AC;
        margin-bottom: 2%;
    }
    #imageDrink{
        width: 100%;
    }
    .drinks{
        width: 65%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .drink{
        width: 28%;
        padding: 0;
        border: 1px solid #E5E9EB;
    }
    .drink h1{
        margin-bottom: 1%;
        font-size: 1rem;
        font-weight: 600;
    }

</style>