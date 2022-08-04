<template>
  <div id="app" class="row">
    <div class="col-sm-2" id="slide_bar">
      <SlideBar_candidate />
    </div>
    <div class="col-sm-10">
      <Header />
      <div class="body mt-3">
        <div class="leftHoso">
          <Profile_menu />
        </div>

        <div class="right">
          <div class="title titleRight">Thông tin liên hệ
				<span style="float: right;"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg></a></span>
			  </div>

          <div class="d-flex row">
            <div class="right-left col-2">
              <div>
                <img
                  class="img-avatar"
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt=""
                />
              </div>
              <span>Lập trình viên PHP</span>
            </div>
            <div class="right-middle col-5">
              <div class="info">
                <span class="title">Họ và tên:</span>
                <span>Nguyễn Văn A</span>
              </div>
              <div class="info">
                <span class="title">Email:</span>
                <span>Tuan@gmail.com</span>
              </div>
              <div class="info">
                <span class="title">Số điện thoại:</span>
                <span>0123123123</span>
              </div>
              <div class="info">
                <span class="title">Ngày sinh:</span>
                <span>15/03/2000</span>
              </div>
              <div class="info">
                <span class="title">Địa chỉ:</span>
                <span>419 Ngọc Lâm, Long Biên, Hà Nội</span>
              </div>
            </div>

            <div class="right-right col-5">
              <div class="info">
                <span class="title">Giới tính:</span>
                <span>Nam</span>
              </div>
              <div class="info">
                <span class="title">Hôn nhân:</span>
                <span>Độc thân</span>
              </div>
              <div class="info">
                <span class="title">Tỉnh thành:</span>
                <span>Hà Nội</span>
              </div>
              <div class="info">
                <span class="title">Quận huyện:</span>
                <span>Đông Anh</span>
              </div>
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
.body {
  display: flex;
}
a {
  text-decoration: none;
  font-size: 16px;
}
.selected {
  background-color: lightgray;
}
.bottom-left {
  margin-top: 20px;
}
.top-left {
  text-align: center;
  border-bottom: 1px solid gray;
}
.leftHoso {
  border-right: 1px solid gray;
}
.titleRight {
  margin-top: 20px;
  margin-bottom: 20px;
}
.img-avatar {
  width: 80%;
  border-radius: 50%;
}
.right {
  margin-left: 40px;
  font-size: 14px;
}
.title {
  font-weight: bold;
  margin-right: 5px;
}
.info{
  margin-top: 5px;
  margin-bottom: 5px;
}
form {
  width: fit-content;
  margin: 0 auto;
  font-size: 14px;
}
input {
  width: 385.4px;
  height: 38.63px;
  border-radius: 5px;
  margin: 2px 0 10px 0;
  padding-left: 5px;
}
</style> 