import Vue from 'vue'
import VueRouter from 'vue-router'
import CandidateLogin from '@/views/HiepViews/CandidateLogin.vue'
import LandingPage from '@/views/HiepViews/LandingPage.vue'
import CandidateRegister from '@/views/HiepViews/CandidateRegister.vue'
import RecruiterLogin from '@/views/HiepViews/RecruiterLogin.vue'
import RecruiterRegister from '@/views/HiepViews/RecuiterRegister.vue'
import ChooseCVType from '@/views/HiepViews/ChooseCVType.vue'
import CandidateOnlineCVForm from '@/views/HiepViews/CandidateOnlineCVForm.vue'
import CVFromPCForm from '@/views/HiepViews/CVFromPCForm.vue'
import RecruiterOnlineCVForm from '@/views/HiepViews/RecruiterOnlineCVForm.vue'
import JobDetailsNoLogin from '@/components/ToanComponents/JobDetailsNoLogin.vue'
import SearchJob from '@/views/HiepViews/SearchJob.vue'
import SearchCandidate from '@/views/HiepViews/SearchCandidate.vue'
// import AddLanguageCertificate from '@/views/TuanNV/AddLanguageCertificate.vue'
// import EditLanguageCertificate from '@/views/TuanNV/EditLanguageCertificate.vue'
// import ViewLanguageCertificate from '@/views/TuanNV/ViewLanguageCertificate.vue'
// import SavedJob from '@/views/TuanNV/SavedJob.vue'
// import AppliedJob from '@/views/TuanNV/AppliedJob.vue'
// import ViewWorkExperience from '@/views/TuanNV/ViewWorkExperience.vue'
// import AddWorkExperience from '@/views/TuanNV/AddWorkExperience.vue'

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
    {
        path: '/chooseCVType/:id',
        name: 'ChooseCVType',
        component: ChooseCVType
    },
    {
        path: '/candidateOnlineCVForm/:id',
        name: 'CandidateOnlineCVForm',
        component: CandidateOnlineCVForm
    },
    {
        path: '/cvFromPCForm/:id',
        name: 'CVFromPCForm',
        component: CVFromPCForm
    },
    {
        path: '/recruiterOnlineCVForm/:id',
        name: 'RecruiterOnlineCVForm',
        component: RecruiterOnlineCVForm
    },
    {
        path: '/job-detail/:id',
        name: 'JobDetailsNoLogin',
        component: JobDetailsNoLogin
    },
    {
        path: '/searchJob/:searchText',
        name: 'SearchJob',
        component: SearchJob
    },
    {
        path: '/searchCandidate',
        name: 'SearchCandidate',
        component: SearchCandidate
    }, {
        path: '/addLanguage',
        name: 'AddLanguageCertificate',
        component: () => import("@/views/TuanNV/AddLanguageCertificate.vue")
    }, {
        path: '/editLanguage/:id',
        name: 'EditLanguageCertificate',
        component: () => import("@/views/TuanNV/EditLanguageCertificate.vue")
    }, {
        path: '/language',
        name: 'ViewLanguageCertificate',
        component: () => import("@/views/TuanNV/ViewLanguageCertificate.vue")
    }, {
        path: '/savedjobs',
        name: 'SavedJob',
        component: () => import("@/views/TuanNV/SavedJob.vue")
    }, {
        path: '/appliedjob',
        name: 'AppliedJob',
        component: () => import("@/views/TuanNV/AppliedJob.vue")
    }, {
        path: '/workexp',
        name: 'ViewWorkExperience',
        component: () => import("@/views/TuanNV/ViewWorkExperience.vue")
    }, {
        path: '/addworkexp',
        name: 'AddWorkExperience',
        component: () => import("@/views/TuanNV/AddWorkExperience.vue")
    }, {
        path: '/careergoal',
        name: 'CareerGoal',
        component: () => import("@/views/TuanNV/CareerGoal.vue")
    }, {
        path: '/selfskill',
        name: 'SelfSkill',
        component: () => import("@/views/TuanNV/SelfSkill.vue")
    }
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