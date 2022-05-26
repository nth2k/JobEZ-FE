import Vue from 'vue'
import VueRouter from 'vue-router'
import CandidateLogin from '@/views/CandidateLogin.vue'
import LandingPage from '@/views/LandingPage.vue'
import CandidateRegister from '@/views/CandidateRegister.vue'
import RecruiterLogin from '@/views/RecruiterLogin.vue'
import RecruiterRegister from '@/views/RecuiterRegister.vue'


Vue.use(VueRouter)

export const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage
    },
    {
        path: '/candidateLogin',
        name: 'CandidateLogin',
        component: CandidateLogin
    },  
    {
        path: '/candidateRegister',
        name: 'CandidateRegister',
        component: CandidateRegister
    },  
    {
        path: '/recruiterLogin',
        name: 'RecruiterLogin',
        component: RecruiterLogin
    }, 
    {
        path: '/recruiterRegister',
        name: 'RecruiterRegister',
        component: RecruiterRegister
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router