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
          <div class="titleRight">Người tham chiếu</div>
          <div class="container">
            <div class="label">
              <span class="label-title">Người tham chiếu : </span
              ><span>Nguyễn Trung Hiếu</span>
              <span class="menu-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                  />
                </svg>
              </span>
            </div>
            <div class="label">
              <span class="label-title">Chức danh : </span
              ><span>Trưởng phòng abc</span>
            </div>
            <div class="label">
              <span class="label-title">Tên công ty : </span><span>Hưng Hà</span>
            </div>
            <div class="label">
              <span class="label-title">Email : </span
              ><span>hieu1996@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlideBar_candidate from "@/components/ProfileCandidate/slideBar_candidate.vue";
import Header from "../ToanNT16/candidate_management/Header.vue";
import Profile_menu from "@/components/ProfileCandidate/profile_menu.vue";
export default {
  components: {
    SlideBar_candidate,
    Header,
    Profile_menu,
  },
};
</script>

<style scoped>
.menu-icon {
  float: right;
}
.label {
  margin-bottom: 15px;
}
.label-title {
  font-weight: bold;
}
.tbody {
  padding-top: 10px;
}
.title {
  font-weight: bold;
  font-size: 16px;
}
.titleRight {
  margin-bottom: 20px;
  margin-left: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
  width: 137px;
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
</style>