<template>
  <div class="candidate-overview-container">
    <header>Tổng quan về ứng viên</header>
    <div class="candidate-body row">
      <div class="col-12 col-sm-2">
        <img src="../../../../assets/prl_h.png" alt="Chỗ ở hiện tại" />
      </div>
      <div class="col-12 col-sm-10 row">
        <div class="col-12">Chỗ ở hiện tại</div>
        <div class="col-12 value">An Bình, Yên Hòa, Đồng Nai</div>
      </div>

      <div class="col-12 col-sm-2">
        <img src="../../../../assets/prl_dd.png" alt="Nơi mong muốn làm việc" />
      </div>
      <div class="col-12 col-sm-10 row">
        <div class="col-12">Nơi mong muốn làm việc</div>
        <div class="col-12 value">Hồ Chí Minh, Bình Dương, Đồng Nai</div>
      </div>

      <div class="col-12 col-sm-2">
        <img src="../../../../assets/prl_kn.png" alt="Kinh nghiệm làm việc" />
      </div>
      <div class="col-12 col-sm-10 row">
        <div class="col-12">Kinh nghiệm làm việc</div>
        <div class="col-12 value">Chưa có kinh nghiệm</div>
      </div>

      <div class="col-12 col-sm-2">
        <img src="../../../../assets/prl_phone.png" alt="Số điện thoại" />
      </div>
      <div class="col-12 col-sm-10 row">
        <div class="col-12">SĐT</div>
        <div class="col-12 value d-none">0845684888</div>
        <div
          @click="requireLogin()"
          class="col-12 require-login ml-3 mb-2 pr-0"
        >
          Đăng nhập để xem số điên thoại
        </div>
      </div>

      <div class="col-12 col-sm-2">
        <img src="../../../../assets/prl_mail.png" alt="Email" />
      </div>
      <div class="col-12 col-sm-10 row">
        <div class="col-12">Email</div>
        <div class="col-12 value">nguyenthetoan1606@gmail.com</div>
        <div class="d-none">Đăng nhập để xem Mail</div>
      </div>
    </div>

    <div
      ref="someName"
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CandidateOverview",
  methods: {
    requireLogin() {
      const modalElement = this.$refs.someName;
      console.log(modalElement);
      modalElement.modal('show');
    },
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
</style>