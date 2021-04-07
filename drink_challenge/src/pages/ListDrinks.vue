<template>
    <main>
        <NavbarList />
        <section class="container">
            <div class="title">
                <h1>Os melhores drinks não-acoólicos <span style="color:#4094F7">do Brasil</span></h1>
                <p>{{drinks.length}} resultados encontrados</p>
            </div>
        <div class="drinks">
            <div v-for="(drink,index) in drinks" class="drink"  :key="index">
                    <router-link class="router-link" :to="'/drink/' + drink.idDrink">
                    <img id="imageDrink" :src="drink.strDrinkThumb" :alt="drink.strDrink">
                    <h1>{{drink.strDrink}}</h1>
                    <p>#{{drink.idDrink}}</p>
                    </router-link>
            </div>
        </div>
        </section>
    </main>
</template>

<script>
import api from '@/services/api.js';
import NavbarList from '../components/NavbarList';
export default {
    name: "ListDrinks",
    components: {
         NavbarList,
    },
    data(){
        return {
            drinks: []
        }
    },
    mounted(){
        api.get('filter.php?a=Non_Alcoholic').then(response => {
            this.drinks = response.data.drinks;
            console.log(response.data);
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
        font-weight: 600;
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
        width: 80%;
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
        display: flex;
        flex-direction: flex-start;
        padding: 10% 10% 0% 8%;
        color: #252C32;
        font-weight: 400;
        text-decoration: none;
    }
    .drink p{
        display: flex;
        flex-direction: flex-start;
        padding: 0% 2% 5% 8%;
        font-weight: 600;
        color: #252C32;
        text-decoration: none;
    }
    @media(max-width: 425px){
        .title{
        margin-top: 20%;
        }
        .drinks{
            width: 100%;
        }
    }

</style>