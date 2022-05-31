<template>
  <div>
    <HeaderComponent />
    <div class="search-container">
      <div class="search-form">
        <form action="" method="post">
          <input type="text" placeholder="Nhập công việc, vị trí" />
          <select name="province" id="">
            <option value="">---Chọn tỉnh thành---</option>
          </select>
          <button type="submit">Tìm kiếm</button>
        </form>
      </div>
      <div class="text-center mt-5 mb-5">
        <span style="color: white">Cần thêm nhiều tùy chọn tìm kiếm? </span>
        <span style="color: yellow">Tìm kiếm nâng cao</span>
      </div>
    </div>
    <h4 class="text-center mt-5" style="color: #4c5bd4">
      Việc Làm Tuyển Dụng Mới Nhất
    </h4>
    <div class="search-result">
      <h5>Việc tìm người mới nhất - cập nhật liên tục</h5>
      <hr />
      <div class="job-container1">
        <div class="job row p-3 m-3">
          <div class="logo">
            <img
              style="width: 170px; height: 100px"
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
            ><span> Hạn nộp: 21/01/2022</span>
            <b-icon class="ml-5" icon="coin" aria-hidden="true"></b-icon
            ><span style="color: red"> 7 - 15 triệu</span><br />
            <span style="float: right" v-if="isClicked == false" v-on:click="isClicked = !isClicked"> - Xem thêm</span>
            <span style="float: right" v-if="isClicked" v-on:click="isClicked = !isClicked"> - Rút gọn</span><br />
          </div>
          <div v-if="isClicked" class="shortDes p-3">
            <h5>Mô tả công việc</h5>
            <p>
              Xử lý các sự cố liên quan đến máy tính, phần mềm, thiết bị mạng, đường truyền trong công ty. Xác định, chẩn đoán và giải quyết vấn đề đối với yêu cầu của người sử dụng máy tính cá nhân, phần mềm máy tính và phần cứng, mạng, Internet trong công ty.
            </p>
          </div>
        </div>
        <div class="job row p-3 m-3">
          <div class="logo">
            <img
              style="width: 170px; height: 100px"
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
            ><span> Hạn nộp: 21/01/2022</span>
            <b-icon class="ml-5" icon="coin" aria-hidden="true"></b-icon
            ><span style="color: red"> 7 - 15 triệu</span><br />
            <span style="float: right" v-if="isClicked == false" v-on:click="isClicked = !isClicked"> - Xem thêm</span>
            <span style="float: right" v-if="isClicked" v-on:click="isClicked = !isClicked"> - Rút gọn</span><br />
          </div>
          <div v-if="isClicked" class="shortDes p-3">
            <h5>Mô tả công việc</h5>
            <p>
              Xử lý các sự cố liên quan đến máy tính, phần mềm, thiết bị mạng, đường truyền trong công ty. Xác định, chẩn đoán và giải quyết vấn đề đối với yêu cầu của người sử dụng máy tính cá nhân, phần mềm máy tính và phần cứng, mạng, Internet trong công ty.
            </p>
          </div>
        </div>
        <div class="job"></div>
        <div class="job"></div>
        <div class="job"></div>
        <div class="job"></div>
        <div class="job"></div>
        <div class="job"></div>
        <div class="job"></div>
      </div>

      <div class="page">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  name: "SearchJob",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      isClicked: false,
    };
  },
};
</script>

<style scoped>
.search-container {
  background-image: url("@/assets/landingPage.png");
  width: 100%;
  height: 286px;
  padding-top: 70px;
}

.search-form {
  width: 80%;
  text-align: center;
  margin: 0 auto;
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

.search-result {
  width: 90%;
  height: auto;
  margin: 50px auto;
}

.job-container1 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.job {
  width: 47%;
  height: auto;
  margin: 20px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
}

.job-info {
  height: auto;
}

.shortDes {
  margin-top: 13px;
  background-color: #f2f2f2;
  width: 100%;
  height: 150px;
}

.page {
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 50px;
}
</style>