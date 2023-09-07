<template>
    <nav class="navbar bg-dark ">
        <ul  >
            <li v-for="link in linkList " :key="link" >
                <router-link :to="{ name: link.route }">
                    {{ link.name }}
                </router-link>
            </li>
        </ul>
    </nav>
  
</template>

<script>
export default {
    name:'AppHeader',

    data(){
        return {
             linkList : [

                {
                    route: 'cocktails.index',
                    name: 'Cocktails',
                },

                {
                    route: 'about',
                    name: 'AboutUs',
                    
                }, 
                {
                    route: 'contact',
                    name: 'Contacts',
                    
                }
             ]
        }
    }

}
</script>

<style lang="scss" scoped>
 nav{
        margin-bottom: 4rem;
        width: 100%;
        padding: 1rem 3rem;
        background-color: rgb(232, 232, 232);
        color: black;

        ul{
            width: 100%;
            display: flex;
            justify-content: space-around;
            font-size: 1rem;
            list-style-type: none;

            li{
                margin-right: 2rem;
                a {
                    text-decoration: none;
                    color: white;
                }
            }
        }
    }

</style>