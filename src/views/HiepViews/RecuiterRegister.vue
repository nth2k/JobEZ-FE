<template>
  <div>
    <TopHeaderComponent />
    <div class="row">
      <ChooseRecruiter />
      <div class="col-6" style="padding-left: 150px; padding-top:50px;">
        <div class="tab">
          <div class="login"><button class="btn"><router-link to="/recruiterLogin">Đăng nhập</router-link></button></div>
          <div class="register"><button class="btn"><router-link to="/recruiterRegister">Đăng kí</router-link></button></div>
        </div>
        <h2>Bạn chưa có tài khoản?</h2>
        <form class="login-form" action="" method="">
          <h5>Tên công ty<span style="color: red">*</span></h5>
          <input type="text" value="" placeholder="Tên công ty" />
          <h5>Email<span style="color: red">*</span></h5>
          <input type="text" value="" placeholder="Email" />
          <h5>Mật khẩu<span style="color: red">*</span></h5>
          <input type="password" value="" placeholder="Nhập mật khẩu" />
          <h5>Xác nhận mật khẩu<span style="color: red">*</span></h5>
          <input type="password" value="" placeholder="Xác nhận mật khẩu" />
          <button class="btn" type="submit">Đăng kí</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ChooseRecruiter from "@/components/HiepComponents/ChooseRecruiter.vue";
import TopHeaderComponent from "@/components/HiepComponents/TopHeaderComponent.vue";
export default {
  name: "RecuiterRegister",
  components: {
    ChooseRecruiter,
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

.tab button a{
  text-decoration: none;
  color: #6874D7;
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

.login-form p {
  float: right;
}

.login-form button {
  width: 500px;
  height: 50px;
  background-color: #6874d7;
  color: white;
  margin-top: 20px;
}
</style>