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
        <img
          class="col-3 avatar rounded-circle"
          src="../../../../../assets/no_img3.png"
          alt="Hình ảnh ứng viên"
        />
        <span class="col-6 my-auto">Nguyễn Thế Toàn</span>
        <span class="col-3 icon_tt">
          <a
            class="nav-link"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src="../../../../../assets/icon_dot.png"
              class="rounded-circle"
            />
          </a>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a class="dropdown-item" href="#"
              ><img
                class="mb-1 mr-2"
                src="../../../../../assets/icon_dx.png"
                alt=""
              />Thông tin cá nhân</a
            >
            <a class="dropdown-item" href="#"
              ><img
                class="mb-1 mr-2"
                src="../../../../../assets/icon_pp.png"
                alt=""
              />Đăng xuất</a
            >
          </div></span
        >
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
  background-color: #6074dd;
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
  border-radius: 25rem;
}

.icon_tt {
  cursor: pointer;
}
</style>