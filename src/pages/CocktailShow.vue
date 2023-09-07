<template>
   <div class="cocktail-card" >
      <SingleCocktail v-if="cocktail"  :cocktail= "cocktail" class=" W-50 " />
    </div>
</template>


<script>
import SingleCocktail from '../components/SingleCocktail.vue';
import axios from 'axios';

export default {

    name: 'CocktailShow',
    components : {
        SingleCocktail,
    },

    data(){
       return{

        apiUrl : 'http://127.0.0.1:8000',

        cocktail:false,

         
       }
    },

    methods: {
        getSingleCocktail(){
            console.log(this.$route.params.slug);
            axios.get(` ${this.apiUrl}/api/cocktails/${this.$route.params.slug}`)
            
            .then((response) => {
                console.log(response.data.results);
                this.cocktail = response.data.results;
            })
            .catch((error)=>{
                // handle error
                console.log(error);
            });
        }
    },

    created() {
        this.getSingleCocktail();
    },
}
</script>

<style lang="scss" scoped>
div.cocktail-card{
    margin: 0 auto;
}

</style>