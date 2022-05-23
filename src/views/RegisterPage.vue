<template>
  <div>
    <TopHeaderComponent />
    <div class="row">
      <ChooseAccount />
      <div class="col-6" style="padding-left: 150px; padding-top:50px;">
        <div class="tab">
          <div class="login"><button class="btn">Login</button></div>
          <div class="register"><button class="btn">Register</button></div>
        </div>
        <h2>You don't have any account?</h2>
        <form class="login-form" action="" method="">
          <h5>Full name<span style="color: red">*</span></h5>
          <input type="text" value="" placeholder="Full name" />
          <h5>Email address<span style="color: red">*</span></h5>
          <input type="text" value="" placeholder="Enter email" />
          <h5>Password<span style="color: red">*</span></h5>
          <input type="password" value="" placeholder="Enter password" />
          <h5>Confirm Password<span style="color: red">*</span></h5>
          <input type="password" value="" placeholder="Confirm password" />
          <button class="btn" type="submit">Regist</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ChooseAccount from "@/components/ChooseAccount.vue";
import TopHeaderComponent from "@/components/TopHeaderComponent.vue";
export default {
  name: "LoginPage",
  components: {
    ChooseAccount,
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
  width: 100px;
  height: 40px;
  background-color: rgba(76, 91, 212, 0.1);
  border-radius: 5px;
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
  border-color: #f1eded;
  padding: 20px;
}

.login-form p {
  float: right;
}

.login-form button {
  width: 500px;
  height: 50px;
  background-color: #6874d7;
  color: white;
}
</style>