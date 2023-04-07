import { createRouter, createWebHistory } from "vue-router";
import Home from './Home.vue'
import Login from './Auth/Login.vue'
import Reg from './Auth/Registration.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: "Home Page"
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta:{
            title: 'Login page',
        }
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Reg,
        meta:{
            title: 'Registration page',
        }
    }

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

router.beforeEach((toRoute, fromRoute, next) => {
    window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Home';
    next();
});

export default router;
