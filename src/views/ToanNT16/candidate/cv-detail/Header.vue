<template>
  <div class="container-fluid border-bottom">
    <div class="pb-4">
      <div class="row">
        <div class="col-7 text-right">
          <div class="pt-3 pr-5">
            <img class="img-fluid" src="@/assets/logo-3.png" alt="Logo" />
          </div>
        </div>
        <div class="col-5">
          <div class="row">
            <div class="col-6 text-right pt-3">
              <div class="row">
                <div class="col-12 text-right">
                  <div class="dropdown show">
                    <a
                      class="dropdown-toggle text-decoration-none"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Nguyễn Thế Toàn
                    </a>
                    <div
                      class="dropdown-menu mt-3 mr-5"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <div class="container">
                        <!-- header -->
                        <div class="py-3 border-bottom">
                          <div class="row">
                            <div class="col-2">
                              <img
                                class="img-fluid rounded-circle"
                                src="@/assets/company_image.jpg"
                                alt="Logo"
                              />
                            </div>
                            <div class="col-10">Nguyễn Thế Toàn</div>
                          </div>
                        </div>
                        <!-- body -->
                        <div class="row px-2">
                          <div class="col-12 pb-2 pt-2 pb-1 manage-cv mb-2">
                            <div class="row">
                              <div class="col-2">
                                <img
                                  class="img-fluid-"
                                  src="@/assets/hsct.png"
                                />
                              </div>
                              <div class="col-10">
                                <button>Quản lý CV</button>
                              </div>
                            </div>
                          </div>
                          <div
                            class="col-12 col-3 pt-2 pb-2 manage-account mb-2"
                          >
                            <div class="row">
                              <div class="col-2">
                                <img
                                  class="img-fluid-"
                                  src="@/assets/hsct.png"
                                />
                              </div>
                              <div class="col-10">
                                <button>Quản lý tài khoản</button>
                              </div>
                            </div>
                          </div>
                          <div class="col-12 pt-2 pb-2 logout">
                            <div class="row">
                              <div class="col-2">
                                <img
                                  class="img-fluid-"
                                  src="@/assets/logout.png"
                                />
                              </div>
                              <div class="col-10">
                                <button>Đăng xuất</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-2 pt-2 pr-5">
              <img
                style="width: 3rem; height: 3rem"
                class="img-fluid rounded-circle"
                src="@/assets/company_image.jpg"
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>

<style scoped>
.manage-cv,
.manage-account {
  background-color: #232f87;
}
.logout {
  background-color: #ffa800;
}

.manage-cv,
.manage-account,
.logout {
  color: #ffffff;
  font-weight: bold;
  border-radius: 1rem;
}
</style>