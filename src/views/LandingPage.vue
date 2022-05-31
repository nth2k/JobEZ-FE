<template>
  <div>
    <HeaderComponent />
    <div class="search-container">
      <h1 class="text-center" style="color: white; padding-top: 150px">
        JobEZ
      </h1>
      <div class="search-form">
        <form action="" method="post">
          <input type="text" placeholder="Nhập công việc, vị trí" />
          <select name="province" id="">
            <option value="">---Chọn tỉnh thành---</option>
          </select>
          <button type="submit">Tìm kiếm</button>
        </form>
      </div>
      <div class="row advance">
        <div class="col-4 text-center">
          <b-icon icon="newspaper" aria-hidden="true"></b-icon><br />
          Đăng tin miễn phí
        </div>
        <div class="col-4 text-center">
          <b-icon icon="search" aria-hidden="true"></b-icon><br />
          Tìm kiếm nâng cao
        </div>
        <div class="col-4 text-center">
          <b-icon icon="globe" aria-hidden="true"></b-icon><br />
          Việc làm từ xa
        </div>
      </div>
    </div>

    <div class="hot-job m-5 mx-auto">
      <h5>VIỆC LÀM HẤP DẪN</h5>
      <hr />
      <div class="job-container1">
        <div class="job row p-3 m-3">
          <div class="logo">
            <img
              style="width: 70px; height: 70px"
              src="https://tuyendung.fpt.com.vn/public/img/logo-ft.png"
              alt=""
            />
          </div>
          <div class="job-info pl-4">
            <span style="color: red">NHÂN VIÊN PHA CHẾ MỸ PHẨM</span><br />
            <span>CÔNG TY TNHH HANACOS VN</span><br />
            <b-icon icon="pin-map" aria-hidden="true"></b-icon>
            <span> Toàn quốc</span><br />
            <b-icon icon="briefcase" aria-hidden="true"></b-icon
            ><span> Hạn nộp: 21/01/2022</span><br />
            <b-icon icon="coin" aria-hidden="true"></b-icon
            ><span style="color: red"> 7 - 15 triệu</span>
          </div>
        </div>
        <div class="job"></div>
        <div class="job"></div>
        <div class="job"></div>
        <div class="job"></div>
        <div class="job"></div>
        <div class="job"></div>
        <div class="job"></div>
        <div class="job"></div>
      </div>
    </div>
    <div class="row">
      <div class="brand-job mt-5">
        <h5>VIỆC LÀM THƯƠNG HIỆU</h5>
        <hr />
        <div class="job-container2">
          <div class="job2 row p-3 m-3">
            <div class="logo">
              <img
                style="width: 70px; height: 70px"
                src="https://tuyendung.fpt.com.vn/public/img/logo-ft.png"
                alt=""
              />
            </div>
            <div class="job-info pl-4">
              <span style="color: red">NHÂN VIÊN PHA CHẾ MỸ PHẨM</span><br />
              <span>CÔNG TY TNHH HANACOS VN</span><br />
              <b-icon icon="pin-map" aria-hidden="true"></b-icon>
              <span> Toàn quốc</span><br />
              <b-icon icon="briefcase" aria-hidden="true"></b-icon
              ><span> Hạn nộp: 21/01/2022</span><br />
              <b-icon icon="coin" aria-hidden="true"></b-icon
              ><span style="color: red"> 7 - 15 triệu</span>
            </div>
          </div>
          <div class="job2"></div>
          <div class="job2"></div>
          <div class="job2"></div>
          <div class="job2"></div>
          <div class="job2"></div>
          <div class="job2"></div>
          <div class="job2"></div>
        </div>
        <div class="hotline mt-5">
          <div class="hotline-header">
            <h5>HOTLINE HỖ TRỢ CHI NTD VÀ ỨNG VIÊN</h5>
          </div>
          <div class="hotline-info p-3">
            <span>HOTLINE tư vấn tuyển dụng</span>
            <div class="row w-100 p-2">
              <div class="w-50">
                <span>0982.079.209 - Nhóm Ngô Dung</span><br>
                <span>0982.079.209 - Nhóm Ngô Dung</span><br>
                <span>0982.079.209 - Nhóm Ngô Dung</span><br>
                <span>0982.079.209 - Nhóm Ngô Dung</span><br>
              </div>
              <div class="w-50">
                <span>0982.079.209 - Nhóm Ngô Dung</span><br>
                <span>0982.079.209 - Nhóm Ngô Dung</span><br>
                <span>0982.079.209 - Nhóm Ngô Dung</span><br>
                <span>0982.079.209 - Nhóm Ngô Dung</span><br>
              </div>
            </div>
            <hr>
          </div>
        </div>
      </div>
      <div class="chat-recruiter mt-5">
        <h5>TÌM VIỆC THEO TỈNH THÀNH</h5>
        <div class="job-by-province">
          <span>Việc làm tại Hồ Chí Minh</span>
          <hr />
          <span>Việc làm tại Hồ Chí Minh</span>
          <hr />
          <span>Việc làm tại Hồ Chí Minh</span>
          <hr />
          <span>Việc làm tại Hồ Chí Minh</span>
          <hr />
          <span>Việc làm tại Hồ Chí Minh</span>
          <hr />
          <span>Việc làm tại Hồ Chí Minh</span>
          <hr />
          <span>Việc làm tại Hồ Chí Minh</span>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  name: "LandingPage",
  components: {
    HeaderComponent,
  },
};
</script>

<style scope>
.search-container {
  background-image: url("@/assets/landingPage.png");
  height: 100vh;
  width: 100%;
}

.search-form {
  width: 80%;
  text-align: center;
  margin: 50px 144px;
}

.search-form input {
  width: 600px;
  height: 65px;
  border-radius: 50px 2px 2px 50px;
  padding-left: 40px;
  background-color: white;
  border: 2px solid black;
}

.search-form select {
  width: 356px;
  height: 65px;
  padding-left: 40px;
  background-color: white;
  border: 2px solid black;
}

.search-form button {
  width: 120px;
  height: 62px;
  background-color: #fff600;
  border-radius: 2px 50px 50px 2px;
}

.advance {
  margin-top: 50px;
  color: #ffffff;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  padding-top: 50px;
  opacity: 0.5;
}

.advance svg {
  width: 50px;
  height: 50px;
}

.hot-job {
  width: 80%;
}

.brand-job {
  width: 820px;
  margin-left: 150px;
  margin-right: 20px;
}

.job-container1 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.job-container2 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.job {
  width: 30%;
  height: 150px;
  margin: 20px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
}

.job2 {
  width: 45%;
  height: 150px;
  margin: 20px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
}

.chat-recruiter {
  width: 385px;
  padding: 0 30px;
}

.job-by-province {
  border-top: 1px solid #307df1;
  width: 100%;
  color: #307df1;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin: 15px;
  padding-top: 20px;
}

.hotline {
  position: absolute;
  width: 803px;
  height: 326px;
  left: 150px;
}

.hotline-header {
  color: white;
  padding: 15px;
  gap: 13px;
  width: 803px;
  height: 56px;
  background: #4c5bd4;
}

.hotline-info {
  height: 270px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  position: absolute;
  width: 803px;
}
</style>
