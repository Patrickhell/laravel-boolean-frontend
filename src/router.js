import { createRouter, createWebHistory } from 'vue-router';

//IMPORTIAMO I COMONNENTI
import Cocktails from './pages/Cocktails.vue';
import AboutUs from './pages/AboutUs.vue';
import Contacts from './pages/Contacts.vue';




const router = createRouter({
    history: createWebHistory(),
    routes : [
         {
            path :'/',
            name : 'cocktails.index',
            component : Cocktails,

         },
        
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
    ]
})

export { router };