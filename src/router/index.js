
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'

Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]



})

export default router;