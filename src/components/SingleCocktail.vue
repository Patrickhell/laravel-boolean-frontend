<template>
    <div class="card cocktail-card " style="height: 35rem;">
        <div class="card-body">
            <img :src="cocktail.image" alt="" style="height: 20rem;"/> 
            <div class="card-img-top"  >
                <h4 :style="'color:' + cocktail.category.color + ';'">
                    <strong> Category:</strong> <span>{{ cocktail.category.name }}</span>
                </h4>
                <p>  <strong> ID : </strong> <span class="font-size "> {{ cocktail.id }}</span></p>
                <p> <strong> Cocktail name's:</strong> <span class="font-size ">{{ cocktail.name}}</span></p>
                <p><strong> Ingredients :</strong> <span class="font-size">{{ cocktail.ingredients}}</span></p> 
                <p> <strong>Garnish: </strong>  <span class="font-size ">{{ cocktail.garnish }} </span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleCocktail',

        props : {
            'cocktail': Object,
        },

}
</script>

<style lang="scss" scoped>
div.cocktail-card{
            width: calc((100% / 3) - 1rem);
            margin: 1rem;
            background-color: rgb(189, 197, 211);
            color: black;
            margin-bottom: 2rem;
            


            img{
                width: 100%;
                object-fit: cover;
            }
   }

   .font-size{
    font-size: 14px;
   }

   p, h4{
    margin-left: 1rem;
   }

</style>