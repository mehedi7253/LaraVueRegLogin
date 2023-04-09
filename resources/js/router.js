import { createRouter, createWebHistory } from "vue-router";
import Home from './Home.vue'
import Login from './Auth/Login.vue'
import Reg from './Auth/Registration.vue'
import Profile from './Account/Home.vue'
import NotFound from './Error.vue'
import addproduct from './Pages/Addproduct.vue'

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
            guest: true,
            title: 'Login page',
        }
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Reg,
        meta:{
            guest: true,
            title: 'Registration page',
        }
    },
    {
        path: '/user-profile',
        name: 'UserProfile',
        component: Profile,
        meta: {
            requiresAuth: true,
            title: 'User Profile'
        }
    },
    {
        path: '/add-product',
        name: 'products',
        component: addproduct,
        meta: {
            requiresAuth: true,
            title: 'User Profile'
        }
    },
    // {
    //     path: '*',
    //     component: NotFound,
    //     meta: {
    //         title: '404 not found',
    //     }
    // }

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('user');
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (loggedIn) {
        next()
        return
      }
      next('/login')
    } else {
      next()
    }
})

// router.beforeEach((toRoute, fromRoute, next) => {
//     window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Home';
//     next();
// });

export default router;
