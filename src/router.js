import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main'
import Home from './views/home/Home.vue'
import category from './views/category/category'
import cart from './views/cart/cart'
import mine from './views/mine/mine'
import Login from './views/login/index'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'cur',
    routes: [
        {
            path: '/',
            component: Main,
            children: [
                {
                    path: '',
                    name: 'Main',
                    component: Home
                },
                {
                    path: '/home',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/category',
                    name: 'category',
                    component: category,
                },
                {
                    path: '/mine',
                    name: 'mine',
                    component: mine,
                },
            ]
        },
        {
            path: '/cart',
            name: 'cart',
            component: cart
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
    ]
})

