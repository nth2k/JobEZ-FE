<template>
    <div id="app" class="row">
        <div class="col-sm-2" id="slide_bar">
            <SlideBar_candidate />
        </div>
        <div class="col-sm-10">
            <Header />
            <div class="mx-2 my-2 body mt-3 py-3 row">
                <div class="leftHoso">
                    <Profile_menu />
                </div>
                <div class="blockright col-9">
                    <div class="titleRight">Công việc mong muốn</div>
                    <div class="container">
                        <div class="label">
                            <span class="label-title">Công việc: </span><span>Thiết kế</span>
                            <div style="padding: 0; float: right">
                                <span class="icon_tt">
                                    <a class="nav-link" href="#" id="userDropdownMenuLink" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="@/assets/icon_dot.png" class="rounded-circle" />
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right"
                                        aria-labelledby="userDropdownMenuLink">
                                        <span class="dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" fill="currentColor" class="bi bi-pencil-square"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path fill-rule="evenodd"
                                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                            </svg> Sửa</span>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div class="label">
                            <span class="label-title">Ngành nghề: </span>
                            <span class="careerItem">IT phần cứng</span>
                            <span class="careerItem">Công nghệ sinh học</span>
                            <span class="careerItem">IT phần mềm</span>
                        </div>
                        <div class="label">
                            <span class="label-title">Cấp bậc mong muốn : </span><span>Trưởng phòng</span>
                        </div>
                        <div class="label">
                            <span class="label-title">Hình thức : </span><span>Fulltime</span>
                        </div>
                        <div class="label">
                            <span class="label-title">Địa điểm : </span><span>Số 499 Ngọc Lân, Long biên Hà Nội</span>
                        </div>
                        <div class="label">
                            <span class="label-title">Kinh nghiệm : </span><span>3 năm</span>
                        </div>
                        <div class="label">
                            <span class="label-title">Mức lương : </span><span>10.000.000 VNĐ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SlideBar_candidate from "@/components/ProfileCandidate/slideBar_candidate.vue";
import Header from "../ToanNT16/candidate/candidate_management/Header.vue";
import Profile_menu from "@/components/ProfileCandidate/profile_menu.vue";
export default {
    name: "ViewHocVanBangCap",
    components: {
        SlideBar_candidate,
        Header,
        Profile_menu,
    },
    methods: {

    },
};
</script>

<style scoped>
.titleRight {
    margin-bottom: 20px;
    margin-left: 15px;
    padding-bottom: 5px;
    border-bottom: 1px solid gray;
    width: 170px;
    color: #2a3563;
    font-weight: bold;
}

.blockright {
    border-left: 1px solid gray;
}

.body {
    border: 1px solid blue;
    border-radius: 5px;
    box-shadow: 5px 5px lightgray;
}

.label {
    margin-bottom: 15px;
    font-size: 14px;
}

.label-title {
    font-weight: bold;
}
.careerItem{
    background-color: #4C5BD4;
    border-radius: 20px;
    color: white;
    margin: 0 5px;
    padding: 5px 10px;
    font-size: 14px;
}
</style>
