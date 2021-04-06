import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ListDrinks from '@/pages/ListDrinks.vue';

const routes = [
    {
        path: '/',
        component: ListDrinks
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;