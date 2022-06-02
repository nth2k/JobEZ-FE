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
    <div class="row m-5">
      <div class="candidate-container w-75 mt-5">
        <h5 style="color: #4c5bd4">
          Người tìm việc mới nhất - Xem Hồ sơ, CV ứng viên miễn phí
        </h5>
        <hr />
        <div class="candidate-detail">
          <div class="candidate row p-3 m-3">
            <div class="logo">
              <img
                style="width: 170px; height: 120px"
                src="https://tuyendung.fpt.com.vn/public/img/logo-ft.png"
                alt=""
              />
            </div>
            <div class="pl-4">
              <span style="color: #4c5bd4; font-weight: bold"
                >NHÂN VIÊN PHA CHẾ MỸ PHẨM</span
              ><br />
              <span style="color: #f2994a">TRẦN THỊ XUÂN ÁNH</span><br />
              <b-icon icon="pin-map" aria-hidden="true"></b-icon>
              <span> Toàn quốc</span><br />
              <b-icon icon="briefcase" aria-hidden="true"></b-icon
              ><span> Hạn nộp: 21/01/2022</span>
              <b-icon
                class="ml-5"
                icon="layout-text-window"
                aria-hidden="true"
              ></b-icon
              ><span> 6 phút trước</span>
              <b-icon class="ml-5" icon="chat-dots" aria-hidden="true"></b-icon
              ><span> Chat</span>
            </div>
          </div>
          <div class="candidate row p-3 m-3">
            <div class="logo">
              <img
                style="width: 170px; height: 120px"
                src="https://tuyendung.fpt.com.vn/public/img/logo-ft.png"
                alt=""
              />
            </div>
            <div class="pl-4">
              <span style="color: #4c5bd4; font-weight: bold"
                >NHÂN VIÊN PHA CHẾ MỸ PHẨM</span
              ><br />
              <span style="color: #f2994a">TRẦN THỊ XUÂN ÁNH</span><br />
              <b-icon icon="pin-map" aria-hidden="true"></b-icon>
              <span> Toàn quốc</span><br />
              <b-icon icon="briefcase" aria-hidden="true"></b-icon
              ><span> Hạn nộp: 21/01/2022</span>
              <b-icon
                class="ml-5"
                icon="layout-text-window"
                aria-hidden="true"
              ></b-icon
              ><span> 6 phút trước</span>
              <b-icon class="ml-5" icon="chat-dots" aria-hidden="true"></b-icon
              ><span> Chat</span>
            </div>
          </div>
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
      </div>
      <div class="chat-candidate w-25 mt-5 p-3">
        <h5 class="text-center" style="color: #4c5bd4">CHAT VỚI ỨNG VIÊN</h5>
        <hr />
        <div class="chat-info row">
          <div class="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              alt=""
              style="width: 60px; height: 60px"
            />
          </div>
          <div class="ml-3">
            <span>TRẦN THỊ XUÂN ÁNH</span><br />
            <span>Nhân viên pha chế mỹ phẩm</span>
          </div>
        </div>
        <hr />
        <div class="chat-info row">
          <div class="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              alt=""
              style="width: 60px; height: 60px"
            />
          </div>
          <div class="ml-3">
            <span>TRẦN THỊ XUÂN ÁNH</span><br />
            <span>Nhân viên pha chế mỹ phẩm</span>
          </div>
        </div>
        <hr />       
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  name: "SearchCandidate",
  components: {
    HeaderComponent,
  },
  data() {
    return {};
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

.candidate {
  border: 2px dashed rgb(142, 154, 165);
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

.chat-candidate {
  border: 1px solid #4c5bd4;
}
</style>