<template>
  <div class="d-flex flex-row banner">
    <div class="mr-auto p-2">
      <a href="#"><img src="@/assets/logo_w.png" alt="" /></a>
      <!-- @/../assets/logo_w.png -->
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
        <div class="dropdown-menu" aria-labelledby="dropdownBoxSub">
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
        class="
          pt-1
          pb-1
          pl-3
          pr-3
          d-flex
          flex-row flex-sm-row flex-md-row flex-lg-row flex-xl-row
          custom-rouded
        "
        style="background-color: #232f87"
      >
        <div>
          <a class="text-decoration-none" href="/dang-ky.html"
            ><span class="register text-white" style="font-family: 'Roboto'"
              >Đăng ký</span
            ></a
          >
        </div>
        <div>
          <p class="mb-0 text-white pl-1 pr-1" style="font-family: 'Roboto'">
            /
          </p>
        </div>
        <div>
          <a class="text-decoration-none" href="/dang-nhap.html"
            ><span class="text-white" style="font-family: 'Roboto'"
              >Đăng nhập</span
            ></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleBoxSub: false,
    };
  },
  methods: {
    display() {},
  },
};
</script>

<style scoped>
.banner {
  background-color: #4c5bd4;
}

.hidden {
  display: none;
}

.text-decoration-none:hover {
  text-decoration: none;
}

.custom-rouded {
  border-radius: 0.6rem;
}

.list-group li {
  padding: 0;
  border: 0;
  font-family: "Roboto";
}
</style>