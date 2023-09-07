<template>
    <div class="cocktail-container">
        <SingleCocktail v-for="cocktail in cocktails" :key="cocktail" :cocktail= "cocktail"  
        @click="$router.push({ name: 'cocktails.show', params: { slug: cocktail.slug} })" />
      
    </div>
</template>

<script>
import SingleCocktail from '../components/SingleCocktail.vue';
import axios from 'axios';

export default {

  name: 'Cocktails',
  components: {
    SingleCocktail,
  }, 

  data(){

    return {

      cocktails : [],
      apiUrl : 'http://127.0.0.1:8000/api/cocktails',

    }
  },

    methods: {
          getCocktails(apiUrl = this.apiUrl){
              axios.get(apiUrl)
              .then((response)=>{
                  console.log(response.data.results.data)
                  this.cocktails = response.data.results.data
                 
              })
              .catch(function (error) {
                  console.log(error);
              })
          }
    },


    created() {
      this.getCocktails(this.apiUrl);
    }


  }
</script>

<style lang="scss" scoped>
div.cocktail-container{
  display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 0 auto;

}

</style>