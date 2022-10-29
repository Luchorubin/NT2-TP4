import Vue from 'vue'
import VueRouter from 'vue-router'

import Form from './components/Form.vue'
import HttpClient from './components/HttpClient'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/Form' },
        { path: '/Form', component: Form },
        { path: '/HttpClient', component: HttpClient },
    ]
})