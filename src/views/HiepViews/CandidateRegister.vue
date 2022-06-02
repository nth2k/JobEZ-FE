<template>
  <div>
    <TopHeaderComponent />
    <div class="row">
      <ChooseCandidate />
      <div class="col-6" style="padding-left: 150px; padding-top: 50px">
        <div class="tab">
          <div class="login">
            <button class="btn">
              <router-link to="/candidateLogin">Đăng nhập</router-link>
            </button>
          </div>
          <div class="register">
            <button class="btn">
              <router-link to="/candidateRegister">Đăng kí</router-link>
            </button>
          </div>
        </div>
        <h2>Bạn chưa có tài khoản?</h2>
        <form class="login-form" action="" method="">
          <h5>Tên đầy đủ<span style="color: red">*</span></h5>
          <input type="text" value="" placeholder="Tên đầy đủ" />
          <h5>Email<span style="color: red">*</span></h5>
          <input type="text" value="" placeholder="Email" />
          <h5>Mật khẩu<span style="color: red">*</span></h5>
          <input type="password" value="" placeholder="Nhập mật khẩu" />
          <h5>Xác nhận mật khẩu<span style="color: red">*</span></h5>
          <input type="password" value="" placeholder="Xác nhận mật khẩu" />
          <h5>Số điện thoại<span style="color: red">*</span></h5>
          <input type="password" value="" placeholder="Nhập số điện thoại" />
          <h5>Tỉnh/Thành phố<span style="color: red">*</span></h5>
          <select name="" id="">
            <option value="">Chọn tỉnh/Thành phố</option>
          </select>
          <select name="" id="">
            <option value="">Chọn quận huyện</option>
          </select>
          <h5>Vị trí mong muốn<span style="color: red">*</span></h5>
          <input type="password" value="" placeholder="VD: Nhân viên" />
          <button class="btn" type="submit">Đăng kí</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ChooseCandidate from "@/components/HiepComponents/ChooseCandidate.vue";
import TopHeaderComponent from "@/components/HiepComponents/TopHeaderComponent.vue";
export default {
  name: "CandidateRegister",
  components: {
    ChooseCandidate,
    TopHeaderComponent,
  },
};
</script>

<style scoped>
.tab {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.tab button {
  color: #6874d7;
  width: 200px;
  height: 40px;
  background-color: rgba(76, 91, 212, 0.1);
  border-radius: 5px;
}

.tab button a {
  text-decoration: none;
  color: #6874d7;
}

h2 {
  margin-top: 20px;
  color: #6874d7;
}

.login-form {
  margin-top: 20px;
}

.login-form h5 {
  margin-bottom: 20px;
}

.login-form input {
  margin-bottom: 20px;
  width: 500px;
  height: 50px;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid black;
}

.login-form select{
  width: 40%;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  margin-right: 20px;
  padding: 5px;
  margin-bottom: 20px;
}

.login-form p {
  float: right;
}

.login-form button {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 500px;
  height: 50px;
  background-color: #6874d7;
  color: white;
}
</style>