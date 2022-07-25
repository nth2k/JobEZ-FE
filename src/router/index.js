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
import AddLanguageCertificate from '@/views/TuanNV/AddLanguageCertificate.vue'
import EditLanguageCertificate from '@/views/TuanNV/EditLanguageCertificate.vue'
import ViewLanguageCertificate from '@/views/TuanNV/ViewLanguageCertificate.vue'
import SavedJob from '@/views/TuanNV/SavedJob.vue'
import AppliedJob from '@/views/TuanNV/AppliedJob.vue'
import ViewWorkExperience from '@/views/TuanNV/ViewWorkExperience.vue'
import AddWorkExperience from '@/views/TuanNV/AddWorkExperience.vue'
import SearchJob from '@/views/HiepViews/SearchJob.vue'
import CandidateChangePassword from '@/views/TuanNV/CandidateChangePassword'

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
    },{
        path: '/addLanguage',
        name: 'AddLanguageCertificate',
        component: AddLanguageCertificate
    },{
        path: '/editLanguage/:id',
        name: 'EditLanguageCertificate',
        component: EditLanguageCertificate
    },{
        path: '/language',
        name: 'ViewLanguageCertificate',
        component: ViewLanguageCertificate
    },{
        path: '/savedjobs',
        name: 'SavedJob',
        component: SavedJob
    },{
        path: '/appliedjob',
        name: 'AppliedJob',
        component: AppliedJob
    },{
        path: '/workexp',
        name: 'ViewWorkExperience',
        component: ViewWorkExperience
    },{
        path: '/addworkexp',
        name: 'AddWorkExperience',
        component: AddWorkExperience
    },
    {
        path: '/searchJob',
        name: 'SearchJob',
        component: SearchJob
    },{
        path: '/candidate/changepass',
        name: 'CandidateChangePassword',
        component: CandidateChangePassword
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router