<template>
   <main class="main-description">
       <NavbarDescription />
        <section class="container-description">
        <div class="drinks-description">
            <div v-for="(drink,index) in drinks" :key=index id="informations-drinks">
                <div id="route-top">
                    <p id="drink-route">Home</p>
                    <img id="vector-arrow" src="../assets/Vector.svg" alt="arrow">
                    <p id="drink-route">Catálogo</p>
                    <img id="vector-arrow" src="../assets/Vector.svg" alt="arrow">
                    <p id="name-drink-route">{{drink.strDrink}}</p>
                </div>
                <div class="drink-description"  >
                <div id="image-container">
                    <img id="image-drink" :src="drink.strDrinkThumb" :alt="drink.strDrink">
                </div>
                <div>
                    <div class="name-and-id">
                        <h1>{{drink.strDrink}}</h1>
                        <p>#{{$route.params.drinkId}}</p>
                    </div>
                    <div class="description-category-glass">
                        <p>Categoria: {{drink.strCategory}}</p>
                        <p>Alcóolico: Não-alcoolico</p>
                        <p>Copo de servir: {{drink.strGlass}}</p>
                    <Button />
                    </div>
                        <router-link class="router-link" to='/' > <button id="button-back">Voltar para a tela inicial</button></router-link>
                    <div class='ingredientes'>
                    <p>Ingredientes</p>
                        <div v-if="drink.strIngredient1!=null">
                            <div class="arrow-image">
                                <img id="vector-arrow" src="../assets/Vector.svg" alt="arrow">
                                <p>{{drink.strIngredient1}}</p>
                            </div>
                            <hr>
                        </div>
                        <div v-if="drink.strIngredient2!=null">
                            <div class="arrow-image">
                                <img id="vector-arrow" src="../assets/Vector.svg" alt="arrow">
                                <p>{{drink.strIngredient2}}</p>
                            </div>
                            <hr>
                        </div>
                        <div v-if="drink.strIngredient3!=null">
                            <div class="arrow-image">
                                <img id="vector-arrow" src="../assets/Vector.svg" alt="arrow">
                                <p>{{drink.strIngredient3}}</p>
                            </div>
                            <hr>
                        </div>
                           <div v-if="drink.strIngredient4!=null">
                            <div class="arrow-image">
                                <img id="vector-arrow" src="../assets/Vector.svg" alt="arrow">
                                <p>{{drink.strIngredient4}}</p>
                            </div>
                            <hr>
                        </div>
                           <div v-if="drink.strIngredient5!=null">
                            <div class="arrow-image">
                                <img id="vector-arrow" src="../assets/Vector.svg" alt="arrow">
                                <p>{{drink.strIngredient5}}</p>
                            </div>
                            <hr>
                        </div>
                           <div v-if="drink.strIngredient6!=null">
                            <div class="arrow-image">
                                <img id="vector-arrow" src="../assets/Vector.svg" alt="arrow">
                                <p>{{drink.strIngredient6}}</p>
                            </div>
                            <hr>
                        </div>
                           <div v-if="drink.strIngredient7!=null">
                            <div class="arrow-image">
                                <img id="vector-arrow" src="../assets/Vector.svg" alt="arrow">
                                <p>{{drink.strIngredient7}}</p>
                            </div>
                            <hr>
                        </div>
                           <div v-if="drink.strIngredient8!=null">
                            <div class="arrow-image">
                                <img id="vector-arrow" src="../assets/Vector.svg" alt="arrow">
                                <p>{{drink.strIngredient8}}</p>
                            </div>
                            <hr>
                        </div>
                           <div v-if="drink.strIngredient9!=null">
                            <div class="arrow-image">
                                <img id="vector-arrow" src="../assets/Vector.svg" alt="arrow">
                                <p>{{drink.strIngredient9}}</p>
                            </div>
                            <hr>
                        </div>
                           <div v-if="drink.strIngredient10!=null">
                            <div class="arrow-image">
                                <img id="vector-arrow" src="../assets/Vector.svg" alt="arrow">
                                <p>{{drink.strIngredient10}}</p>
                            </div>
                            <hr>
                        </div>
                           <div v-if="drink.strIngredient11!=null">
                            <div class="arrow-image">
                                <img id="vector-arrow" src="../assets/Vector.svg" alt="arrow">
                                <p>{{drink.strIngredient11}}</p>
                            </div>
                            <hr>
                        </div>
                           <div v-if="drink.strIngredient12!=null">
                            <div class="arrow-image">
                                <img id="vector-arrow" src="../assets/Vector.svg" alt="arrow">
                                <p>{{drink.strIngredient12}}</p>
                            </div>
                            <hr>
                        </div>
                           <div v-if="drink.strIngredient13!=null">
                            <div class="arrow-image">
                                <img id="vector-arrow" src="../assets/Vector.svg" alt="arrow">
                                <p>{{drink.strIngredient13}}</p>
                            </div>
                            <hr>
                        </div>
                           <div v-if="drink.strIngredient14!=null">
                            <div class="arrow-image">
                                <img id="vector-arrow" src="../assets/Vector.svg" alt="arrow">
                                <p>{{drink.strIngredient14}}</p>
                            </div>
                            <hr>
                        </div>
                         <div v-if="drink.strIngredient15!=null">
                            <div class="arrow-image">
                                <img id="vector-arrow" src="../assets/Vector.svg" alt="arrow">
                                <p>{{drink.strIngredient15}}</p>
                            </div>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </main>
</template>

<script>
import api from '@/services/api.js';
import NavbarDescription from '../components/NavbarDescription';
import Button from '../components/Button';
export default {
    name: "DescriptionDrinks",
    components: {
        NavbarDescription,
        Button,
    },
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
.container-description{
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
}
.drinks-description{
    display: flex;
    align-items: center;
    width: 100vw;
    height: 50vh;
}
 .drink-description{
    width: 100vw;
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     margin-top: 0%;
 }
 #informations-drinks{
     width: 100%;
 }
 #route-top{
     display: flex;
     flex-direction: row;
     width: 20vw;
     margin-top: 10vh;
     margin-left: 20vw;
     height: 10vh;
     padding: 0;
 }
 #name-drink-route{
     margin: 0;
     padding: 2%;
     width: 100vw;
     display: flex;
     align-items: center;
     color:  #252C32;
 }
#drink-route{
     margin: 0;
     padding: 3%;
     width: 100%;
     display: flex;
     align-items: center;
    color: #6E7C87;
 }
 #image-container{
    width: 40vw;
    height: 10%; 
 }
 #image-drink{
    width: 80%;
    height: 70%;
 }
 .name-and-id{
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     padding: 0% 0% 10% 0%;
     margin-left: 0%;
 }
 .name-and-id h1{
     width: 100%;
     font-size: 2rem;
     font-weight: 700;
     color: #252C32;
     padding: 0;
     display: flex;
     align-items: flex-start;
 }
 .name-and-id p{
     color: #9AA6AC;
     font-size: 2rem;
     font-weight: 400;
 }
 .description-category-glass{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
 }
 .description-category-glass p{
     margin: 0px;
     margin-bottom: 1%;
     font-weight: 400;
 }
 #button-back{
     background-color: #4094F7;
     color: white;
     padding: 0.5rem 0rem 0.5rem 0rem;
     margin-top: 5%;
     margin-bottom: 2%;
    outline: none;
    border: none;
    border-radius: 6px;
    width: 20vw;
 }
 #button-back:hover{
     background: linear-gradient(180deg, #E8C9FB 0%, rgba(255, 255, 255, 0) 100%), #4094F7;
     border: blue;
 }
 .ingredientes{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2%;
    height: 20vh
 }
 .arrow-image{
     display: flex;
     flex-direction: row;
 }
 .arrow-image p{
     margin-bottom: 0;
     margin-left: 4%;
     width: 300px;
     display: flex;
     align-items: flex-start;
 }
hr{
     width: 100%;
 }
@media(max-width:1500px){
     #button-back{
         width: 50vw;
         margin-left: 0;
     }
 } 

 @media(max-width:425px){
     .drink-description{
         display: flex;
         flex-direction: column;
     }
     .name-and-id h1{
         width: 100vw;
     }
     #image-container{
         margin-top: 70vh;
         margin-bottom: 10vw;
     }
     hr{
         width: 100%;
     }
     #button-back{
         width: 80vw;
    }
    .description-category-glass{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .name-and-id{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .name-and-id h1{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .ingredientes{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 25vh;
    }
    #route-top{
        display: none;
    }
    #name-drink-route{
        display: none;
    }
    #drink-route{
        display: none;
    }
 } 
</style>