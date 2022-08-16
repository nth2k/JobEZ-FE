 <template>
  <div class="d-flex flex-row banner">
    <div class="mr-auto p-2">
      <router-link tag="a" :to="'/'">
        <img src="@/assets/logo_w.png" alt="" />
      </router-link>
    </div>
    <div class="menu_item p-2">
      <div class="dropdown">
        <img
          class="sub_domain_ul"
          src="@/assets/sub_icon2.png"
          alt="Cẩm nang tìm việc"
          id="dropdownBoxSub"
          aria-expanded="false"
          data-toggle="dropdown"
        />
        <div class="dropdown-menu">
          <ul class="list-group">
            <li class="list-group-item">
              <a
                class="dropdown-item text-primary"
                href="/bang-gia-dich-vu.html"
                rel="nofollow"
                ><i class="bi bi-arrow-bar-up"></i>Bảng giá</a
              >
            </li>
            <li class="list-group-item">
              <a
                class="dropdown-item text-primary"
                href="/tim-ung-vien-quanh-day.html"
                ><i class="bi bi-arrow-bar-up"></i>Tìm ứng viên quanh đây</a
              >
            </li>
            <li class="list-group-item">
              <a
                class="dropdown-item text-primary"
                href="/tim-viec-lam-quanh-day.html"
                ><i class="bi bi-arrow-bar-up"></i>Tìm việc làm quanh đây</a
              >
            </li>
            <li class="list-group-item">
              <a class="dropdown-item text-primary" href="/cong-tac-vien.html"
                ><i class="bi bi-arrow-bar-up"></i>Cộng tác viên</a
              >
            </li>
            <li class="list-group-item">
              <a class="dropdown-item menu_email text-primary" href="/mail365/"
                ><i class="bi bi-arrow-bar-up"></i>Email365</a
              >
            </li>
            <li class="list-group-item">
              <a
                class="dropdown-item menu_vltg text-primary"
                href="https://vieclamtheogio.timviec365.vn/"
                target="_blank"
                ><i class="bi bi-arrow-bar-up"></i>Việc làm theo giờ</a
              >
            </li>
            <li class="list-group-item">
              <a
                class="dropdown-item text-primary"
                href="https://timviec365.vn/ssl/so-sanh-luong.html"
                target="_blank"
                ><i class="bi bi-arrow-bar-up"></i>Tra cứu lương</a
              >
            </li>
            <li class="list-group-item">
              <a
                class="dropdown-item text-primary"
                href="https://nhatro.timviec365.vn"
                target="_blank"
                ><i class="bi bi-arrow-bar-up"></i>Nhà trọ</a
              >
            </li>
            <li class="list-group-item">
              <a
                class="dropdown-item text-primary"
                href="https://giasu.timviec365.vn"
                target="_blank"
                ><i class="bi bi-arrow-bar-up"></i>Gia sư</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mr-3 p-2 justify-content-center align-items-center">
      <div
        v-if="isAuthenticated"
        class="
          pt-1
          pb-1
          pl-3
          pr-3
          d-flex
          flex-row flex-sm-row flex-md-row flex-lg-row flex-xl-row
        "
      >
        <div class="mr-4">
          <div class="dropdown">
            <img
              class="sub_domain_ul"
              src="@/assets/mess_icon2.png"
              alt="Cẩm nang tìm việc"
              id="dropdownBoxSub"
              aria-expanded="false"
              data-toggle="dropdown"
            />
            <div class="dropdown-menu custom-dropdown">
              <ul class="list-group">
                <li class="list-group-item">
                  <a
                    class="dropdown-item text-primary"
                    href="/bang-gia-dich-vu.html"
                    rel="nofollow"
                    ><i class="bi bi-arrow-bar-up"></i>Tin nhắn 1</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mr-4">
          <div class="dropdown">
            <img
              class="sub_domain_ul"
              src="@/assets/icn_bell.png"
              alt="Cẩm nang tìm việc"
              id="dropdownBoxSub"
              aria-expanded="false"
              data-toggle="dropdown"
            />
            <div class="dropdown-menu custom-dropdown">
              <ul class="list-group">
                <li class="list-group-item">
                  <a
                    class="dropdown-item text-primary"
                    href="/bang-gia-dich-vu.html"
                    rel="nofollow"
                    ><i class="bi bi-arrow-bar-up"></i>Thông báo 1</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mr-4">
          <div class="dropdown">
            <img
              class="sub_domain_ul img-fluid rounded-circle custom-img"
              src="@/assets/ic_ava1.png"
              alt="Cẩm nang tìm việc"
              id="dropdownBoxSub"
              aria-expanded="false"
              data-toggle="dropdown"
            />
            <div class="dropdown-menu custom-dropdown p-0 dropdown-user">
              <ul class="list-group">
                <li class="list-group-item shadow mb-3">
                  <div class="row px-4">
                    <div class="col-4">
                      <img
                        class="rounded-circle img-fluid"
                        src="@/assets/dk_s.png"
                        alt=""
                      />
                    </div>
                    <div class="col-8 my-auto font-weight-bold highlight-text">
                      Nguyen The Toan
                    </div>
                  </div>
                </li>
                <li class="list-group-item shadow menu-item pl-3">
                  <div class="row text-uppercase">
                    <div class="col-12">
                      <router-link
                        tag="a"
                        :to="'/general-management'"
                        class="text-decoration-none text-dark"
                      >
                        <img
                          class="mb-2 mr-3"
                          src="@/assets/ic_1.png"
                          alt=""
                        />hoàn thiện hồ sơ</router-link
                      >
                    </div>
                    <div class="col-12">
                      <router-link
                        tag="a"
                        :to="'/general-management'"
                        class="text-decoration-none text-dark"
                      >
                        <img
                          class="mb-2 mr-3"
                          src="@/assets/ic_2.png"
                          alt=""
                        />quản lý tài khoản</router-link
                      >
                    </div>
                    <div class="col-12">
                      <router-link
                        tag="a"
                        :to="'/appliedjob'"
                        class="text-decoration-none text-dark"
                      >
                        <img
                          class="mb-2 mr-3"
                          src="@/assets/ic_3.png"
                          alt=""
                        />việc làm đã ứng tuyển</router-link
                      >
                    </div>
                    <div class="col-12">
                      <router-link
                        tag="a"
                        :to="'/savedjobs'"
                        class="text-decoration-none text-dark"
                      >
                        <img
                          class="mb-2 mr-3"
                          src="@/assets/ic_4.png"
                          alt=""
                        />việc làm đã lưu</router-link
                      >
                    </div>
                    <div class="col-12">
                      <a
                        href="#"
                        class="text-uppercase text-decoration-none text-dark"
                      >
                        <img
                          class="mb-2 mr-3"
                          src="@/assets/ic_5.png"
                          alt=""
                        />Đăng xuất</a
                      >
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        class="text-white p-1 rounded"
        style="background-color: #232f87"
        v-else
      >
        <router-link
          class="text-decoration-none text-white"
          to="/candidateLogin"
          >Đăng nhập</router-link
        >/
        <router-link
          class="text-decoration-none text-white"
          to="/candidateRegister"
          >Đăng kí</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header_Login",
  data() {
    return {
      user: window.localStorage.getItem("user"),
      isAuthenticated: window.localStorage.getItem("user") != null,
    };
  },
};
</script>

<style scoped>
.banner {
  background-color: #4c5bd4;
}

.text-decoration-none:hover {
  text-decoration: none;
}

.list-group li {
  padding: 0;
  border: 0;
  font-family: "Roboto";
}

.custom-img {
  width: 2rem;
  height: 2rem;
}

.custom-dropdown {
  margin-right: 8rem;
}

.dropdown-user {
  height: 10rem;
  width: 18rem;
  margin-right: 15rem;
}

.highlight-text {
  line-height: 1.5rem;
  font-size: 1.2rem;
}

.menu-item {
  color: #0b2239;
}
</style>