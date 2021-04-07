import Vue from 'vue';
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter);

import ListDrinks from '@/pages/ListDrinks.vue';
import DescriptionDrinks from '@/pages/DescriptionDrinks.vue';

const routes = [
    {
        path: '/',
        component: ListDrinks
    },
    {
        path: '/drink/:drinkId',
        component: DescriptionDrinks
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;