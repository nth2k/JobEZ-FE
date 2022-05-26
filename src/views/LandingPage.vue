<template>
  <div>
    <HeaderComponent />
    <div class="search-container">
      <h1 class="text-center" style="color: white; padding-top: 150px">
        JobEZ
      </h1>
      <div class="search-form">
        <form action="" method="post">
          <input type="text" placeholder="Enter job, position" />
          <select name="province" id="">
            <option value="">Ha Noi</option>
          </select>
          <button type="submit">Search</button>
        </form>
      </div>
      <div class="row advance">
        <div class="col-4 text-center">
          <b-icon icon="newspaper" aria-hidden="true"></b-icon><br />
          Post free news
        </div>
        <div class="col-4 text-center">
          <b-icon icon="search" aria-hidden="true"></b-icon><br />
          Advanced search
        </div>
        <div class="col-4 text-center">
          <b-icon icon="globe" aria-hidden="true"></b-icon><br />
          Remote work
        </div>
      </div>
    </div>

    <div class="hot-job m-5 mx-auto">
      <h5>VIEC LAM HAP DAN</h5>
      <hr />
      <div class="job-container">
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
            <b-icon icon="briefcase" aria-hidden="true"></b-icon><span> Hạn nộp: 21/01/2022</span><br />
            <b-icon icon="coin" aria-hidden="true"></b-icon><span style="color: red"> 7 - 15 triệu</span>
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
    <div class="brand-job mt-5 mx-auto">
      <h5>VIEC LAM THUONG HIEU</h5>
      <hr>
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
  width: 80%;
}

.job-container {
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
</style>
