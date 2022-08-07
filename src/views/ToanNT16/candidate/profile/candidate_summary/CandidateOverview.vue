<template>
  <div v-if="isGetCandidateFunction" class="candidate-overview-container">
    <header>Tổng quan về ứng viên</header>
    <div class="candidate-body row">
      <div class="col-12 col-sm-2">
        <img src="@/assets/prl_h.png" alt="Chỗ ở hiện tại" />
      </div>
      <div class="col-12 col-sm-10 row">
        <div class="col-12">Chỗ ở hiện tại</div>
        <div class="col-12 value">
          {{ getCanidate.city }}, {{ getCanidate.province }}
        </div>
      </div>

      <div class="col-12 col-sm-2">
        <img src="@/assets/prl_dd.png" alt="Nơi mong muốn làm việc" />
      </div>
      <div class="col-12 col-sm-10 row">
        <div class="col-12">Nơi mong muốn làm việc</div>
        <div class="col-12 value">{{ getCanidate.workplaceDesired }}</div>
      </div>

      <div class="col-12 col-sm-2">
        <img src="@/assets/prl_kn.png" alt="Kinh nghiệm làm việc" />
      </div>
      <div class="col-12 col-sm-10 row">
        <div class="col-12">Kinh nghiệm làm việc</div>
        <div class="col-12 value">{{ getCanidate.yearOfExperience }}</div>
      </div>

      <div class="col-12 col-sm-2">
        <img src="@/assets/prl_phone.png" alt="Số điện thoại" />
      </div>
      <div class="col-12 col-sm-10 row">
        <div class="col-12">SĐT</div>
        <div class="col-12 value">
          {{ getCanidate.phone }}
        </div>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="requireLoginModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="requireLoginModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content p-0 m-0">
            <div
              class="modal-header modal-title text-white text-center h4"
              id="requireLoginModalLabel"
            >
              Đăng nhập Nhà Tuyển Dụng để xem thông tin và CHAT với ứng viên

              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body row px-0">
              <div class="col-12 post_info">
                Đăng nhập bằng email và mật khẩu của bạn
              </div>
              <div class="row">
                <div class="col-6">
                  <form>
                    <div class="col-12">
                      <input
                        type="text"
                        id="email"
                        placeholder="Nhập địa chỉ email của bạn"
                      />
                    </div>
                    <div class="col-12">
                      <input
                        type="text"
                        id="password"
                        placeholder="Nhập mật khẩu"
                      />
                    </div>
                    <div class="col-12">
                      <button
                        class="py-2 px-4 rounded text-white"
                        type="submit"
                        style="background: #232f87"
                      >
                        Đăng Nhập
                      </button>
                    </div>
                  </form>
                </div>
                <div class="col-6 row">
                  <div class="col-12">Tải ứng dụng Timviec365.vn</div>
                  <div class="col-12">Đã có trên IOS và Android</div>
                  <div class="col-12 mb-2">
                    <img src="@/assets/btn_androi.png" alt="Download Android" />
                  </div>
                  <div class="col-12">
                    <img src="@/assets/btn_ios.png" alt="Download IOS" />
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer row">
              <div class="col-5"><a href="">Quên mật khẩu</a></div>
              <div class="col-5">
                Bạn chưa có tài khoản?<a href="#"> Đăng ký ngay!</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-2">
        <img src="@/assets/prl_mail.png" alt="Email" />
      </div>
      <div class="col-12 col-sm-10 row">
        <div class="col-12">Email</div>
        <div class="col-12 value">{{ getCanidate.email }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CandidateOverview",
  computed: {
    ...mapGetters(["getCanidate", "isGetCandidateFunction"]),
  },
};
</script>

<style scoped>
* {
  font-family: "Roboto";
}

.candidate-overview-container {
  border: 1px solid #e1e1e1;
  border-radius: 0px 0px 5px 5px;
}

header {
  background: #2d4e95;
  color: #fff;
  font-weight: 400;
}

header,
.candidate-body {
  padding-left: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.value {
  color: #959da8;
}

.require-login {
  border: 1px dashed red;
  cursor: pointer;
}

#user_email {
  border: none;
  border-bottom: 1px solid #3d49aa;
  border-radius: 0;
}

#user_email:hover {
  border: none;
  border-bottom: 1px solid #3d49aa;
  border-radius: 0;
}

#user_email:active {
  border: none;
  border-bottom: 1px solid #3d49aa;
  border-radius: 0;
}

#user_email:visited {
  border: none;
  border-bottom: 1px solid #3d49aa;
  border-radius: 0;
}

#user_email:focus {
  border: none;
  border-bottom: 1px solid #3d49aa;
  border-radius: 0;
}

.modal-title {
  background: #232f87;
  border-radius: 15px 15px 0px 0px;
}

.post_info,
form {
  background-color: transparent;
  padding: 1.3rem 2.6rem;
}

form div input {
  border-bottom: 1px solid #4c5bd4;
  margin-bottom: 1.5rem;
}

input:focus {
  outline: none;
}
</style>