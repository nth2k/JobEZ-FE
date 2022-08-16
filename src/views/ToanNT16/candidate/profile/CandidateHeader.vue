<template>
  <div
    v-if="isGetCandidateFunction"
    class="container mt-3 candidate-header-container"
  >
    <div class="row">
      <div class="col-12 col-sm-2">
        <img src="@/assets/ic_ava1.png" alt="" />
      </div>
      <div class="col-12 col-sm-10 row">
        <div class="col-12 col-sm-8 row">
          <div class="col-12 col-md-5">
            <h4>{{ getCanidate.name }}</h4>
            <p>Giới tính : {{ getCanidate.gender }}</p>
            <p>Ngày sinh : {{ getCanidate.dateOfBirth }}</p>
            <p>Hôn nhân : {{ getCanidate.mariaStatus }}</p>
          </div>
          <div class="col-12 col-md-7">
            <br />
            <br />
            <br />
            <p>Mã hồ sơ : {{ getCanidate.profileCode }}</p>
            <p>
              Công việc mong muốn: <strong>{{ getCanidate.desiredJob }}</strong>
            </p>
          </div>
        </div>
        <div class="col-12 col-sm-4">
          <br />
          <br />
          <br />
          <p>Đánh giá ứng viên</p>
          <button
            class="chat_candidate"
            type="button"
            data-target="#login-modal"
            data-toggle="modal"
          >
            Chat ngay
          </button>
          <div
            class="modal fade"
            id="login-modal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header pl-5">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Đăng nhập Nhà Tuyển Dụng để xem thông tin và CHAT với ứng
                    viên
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body"></div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CandidateHeader",
  data() {
    return {
      user: window.localStorage.getItem("user"),
      isAuthenticated: window.localStorage.getItem("user") != null,
    };
  },
  computed: {
    ...mapGetters(["getCanidate", "isGetCandidateFunction"]),
  },
  methods: {
    checkLocalStorage() {
      console.log("localStorage: " + window.localStorage.getItem("user"));
      console.log("isAuthenticated : " + this.isAuthenticated);
    },
  },
};
</script>

<style scoped>
.candidate-header-container {
  box-shadow: 0px 0px 9px rgba(51, 51, 51, 0.25);
  border-radius: 1rem;
  padding: 2rem 1rem 3rem 2rem;
}

.chat_candidate {
  border: 1px solid #6f6f6f;
  border-radius: 3px;
  padding: 0.5rem 2rem;
}

.modal-header {
  background: #3d49aa;
  color: #fff;
}
</style>