import { createRouter, createWebHistory } from 'vue-router';

//IMPORTIAMO I COMONNENTI
import Cocktails from './pages/Cocktails.vue';
import AboutUs from './pages/AboutUs.vue';
import Contacts from './pages/Contacts.vue';
import CocktailShow from './pages/CocktailShow.vue';




const router = createRouter({
    history: createWebHistory(),
    routes : [
        
        {
            path :'/about-us',
            name : 'about',
            component : AboutUs,

        },

        {
            path :'/contacts',
            name : 'contact',
            component : Contacts,

        },
        {
            path :'/',
            name : 'cocktails.index',
            component : Cocktails,

         },
        

        {
            path :'/cocktails/:slug',
            name : 'cocktails.show',
            component : CocktailShow,
        },
    ]
})

export { router };