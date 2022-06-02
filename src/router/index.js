import Vue from 'vue'
import VueRouter from 'vue-router'
import CandidateLogin from '@/views/HiepViews/CandidateLogin.vue'
import LandingPage from '@/views/HiepViews//LandingPage.vue'
import CandidateRegister from '@/views/HiepViews//CandidateRegister.vue'
import RecruiterLogin from '@/views/HiepViews//RecruiterLogin.vue'
import RecruiterRegister from '@/views/HiepViews//RecuiterRegister.vue'


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
    }, 
    // {
    //     path: '/profileCandidate',
    //     name: 'ProfileCandidate',
    //     component: ProfileCandidate
    // }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router