<template>
  <div class="row bg-light pt-4">
    <div class="col-3">
      <div class="custom-control custom-switch">
        <label class="custom-control-label" for="switch1"
          >Cho phép NTD tìm kiếm</label
        >
        <input type="checkbox" class="custom-control-input" id="switch1" />
      </div>
    </div>
    <div class="col-6">
      <nav class="navbar navbar-expand-sm p-0">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link p-0" href="#">Trang chủ </a>
          </li>
          <li class="nav-item">
            <a class="nav-link p-0" href="#">CV xin việc</a>
          </li>
          <li class="nav-item">
            <a class="nav-link p-0" href="#">Câu hỏi tuyển dụng</a>
          </li>
          <li class="nav-item">
            <a class="nav-link p-0" href="#">Tìm việc làm</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="col-3 row">
      <a class="nav-link p-0 col-2" href="#">
        <img src="../../../../../assets/chuong.png" alt="Thông báo" />
        <i>5</i>
      </a>
      <div class="col-9 row b-0">
          <img class="col-6 avatar" src="../../../../../assets/no_img3.png" alt="Hình ảnh ứng viên" />
          <span class="col-6">Nguyễn Thế Toàn</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CandidateManagementProfileHeader",
};
</script>

<style scoped>
.nav-item {
  margin-right: 2rem;
}

.nav-item a {
  color: #4c5bd4;
  font-weight: bold;
}

.nav-link i {
    background-color: #6074DD;
    box-shadow: 0 0 3px rgb(0 0 0 / 25%);
    text-align: center;
    border-radius: 50%;
    color: #ffffff;
    font-size: 1rem;
    line-height: 1.2rem;
    width: 1rem;
    height: 1rem;
    margin-left: -0.5rem;
    margin-top: -2rem;
}

.avatar {
    border-radius: 1.8rem;
}
</style>