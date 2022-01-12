import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/products',
        name: 'Products',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Products.vue'),
    },
    {
        path: '/past-orders',
        name: 'Past Orders',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/PastOrders.vue'),
    },
];

const router = createRouter({
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    history: createWebHistory(process.env.BASE_URL),
});

/**
 * Handle page title refresh on navigation
 */
const TITLE = 'Splendid Food';

router.beforeEach((to, from, next) => {
    document.title = `${TITLE} - ${to.name}`;
    next();
});

export default router;
