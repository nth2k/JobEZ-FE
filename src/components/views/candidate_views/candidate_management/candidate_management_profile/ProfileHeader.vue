<template>
  <div class="row pt-4">
    <div class="col-3">
      <div class="custom-control custom-switch">
        <input
          type="checkbox"
          class="custom-control-input"
          id="customSwitches"
        />
        <label class="custom-control-label" for="customSwitches"
          >Cho phép NTD tìm kiếm</label
        >
      </div>
    </div>
    <div class="col-6">
      <nav class="navbar navbar-expand-sm p-0">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link p-0" href="/">Trang chủ </a>
          </li>
          <li class="nav-item">
            <a class="nav-link p-0" href="/cv">CV xin việc</a>
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
    <div class="col-3">
      <div class="row">
        <a
          class="nav-link pt-4 col-2"
          id="notificationDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img src="@/assets/chuong.png" alt="Thông báo" />
          <i>5</i>
        </a>
        <div
          class="dropdown-menu dropdown-menu-right p-0 ml-auto mt-1"
          aria-labelledby="notificationDropdown"
        >
          <ul class="row list-group">
            <li
              class="col-12 border-bottom list-group-item"
              v-for="notify in notifies"
              :key="notify.company_name"
            >
              <div class="row notify-item">
                <div class="col-3">
                  <img
                    :src="notify.image"
                    alt=""
                    style="width: 4rem; height: 4rem"
                  />
                </div>
                <div class="col-9 row">
                  <div class="col-12">{{ notify.company_name }}</div>
                  <div class="col-12 text-secondary">
                    {{ notify.ago }} giờ trước
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-9 row b-0">
          <img
            class="col-3 avatar rounded-circle"
            :src="avatar"
            alt="Hình ảnh ứng viên"           
          />
          <span class="col-7 my-auto p-0">{{ userName }}</span>
          <span class="col-2 icon_tt">
            <a
              class="nav-link"
              href="#"
              id="userDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src="@/assets/icon_dot.png" class="rounded-circle" />
            </a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="userDropdownMenuLink"
            >
              <a class="dropdown-item" href="#"
                ><img
                  class="mb-1 mr-2"
                  src="@/assets/icon_pp.png"
                  alt=""
                />Thông tin cá nhân</a
              >
              <a class="dropdown-item" href="#"
                ><img class="mb-1 mr-2" src="@/assets/icon_dx.png" alt="" />Đăng
                xuất</a
              >
            </div></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CandidateManagementProfileHeader",
  data() {
    return {
      notifies: [
        {
          image: require("@/assets/iip1635479355.jpg"),
          company_name: "CÔNG TY TNHH GOLD MEDIA VIỆT NAM 1",
          ago: 10,
        },
        {
          image: require("@/assets/iip1635479355.jpg"),
          company_name: "CÔNG TY TNHH GOLD MEDIA VIỆT NAM 2",
          ago: 10,
        },
        {
          image: require("@/assets/iip1635479355.jpg"),
          company_name: "CÔNG TY TNHH GOLD MEDIA VIỆT NAM 3",
          ago: 10,
        },
        {
          image: require("@/assets/iip1635479355.jpg"),
          company_name: "CÔNG TY TNHH GOLD MEDIA VIỆT NAM 4",
          ago: 10,
        },
      ],
      userName: JSON.parse(window.localStorage.getItem("user")).user.name,
      avatar: JSON.parse(window.localStorage.getItem("user")).user.images,
    };
  },
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

.icon_tt,
.notify-item {
  cursor: pointer;
}
</style>