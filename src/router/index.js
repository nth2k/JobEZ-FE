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
import AddNgoaiNguTinHoc from '@/views/TuanNV/AddNgoaiNguTinHoc.vue'
import EditNgoainguTinhoc from '@/views/TuanNV/EditNgoainguTinhoc.vue'
import ViewNgoaiNguTinHoc from '@/views/TuanNV/ViewNgoaiNguTinHoc.vue'
import SavedJob from '@/views/TuanNV/SavedJob.vue'
import AppliedJob from '@/views/TuanNV/AppliedJob.vue'
import ViewKinhNghiemLamViec from '@/views/TuanNV/ViewKinhNghiemLamViec.vue'
import AddKinhNghiemLamViec from '@/views/TuanNV/AddKinhNghiemLamViec.vue'
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
        name: 'AddNgoaiNguTinHoc',
        component: AddNgoaiNguTinHoc
    },{
        path: '/editLanguage/:id',
        name: 'EditNgoaiNguTinHoc',
        component: EditNgoainguTinhoc
    },{
        path: '/language',
        name: 'ViewNgoaiNguTinHoc',
        component: ViewNgoaiNguTinHoc
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
        name: 'ViewKinhNghiemLamViec',
        component: ViewKinhNghiemLamViec
    },{
        path: '/addworkexp',
        name: 'AddKinhNghiemLamViec',
        component: AddKinhNghiemLamViec
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