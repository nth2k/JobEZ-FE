<template>
  <div>
    <TopHeaderComponent />
    <div class="row">     
      <ChooseCandidate />
      <div class="col-6 " style="padding: 150px">
        <div class="tab">
          <div class="login"><button class="btn"><router-link to="/candidateLogin">Đăng nhập</router-link></button></div>
          <div class="register"><button class="btn"><router-link to="/candidateRegister">Đăng kí</router-link></button></div>
        </div>
        <h2>Chào mừng trở lại!</h2>
        <form class="login-form" action="" method="">
          <h5>Email<span style="color: red">*</span></h5>
          <input type="text" value="" placeholder="Nhập email" />
          <h5>Mật khẩu<span style="color: red">*</span></h5>
          <input type="password" value="" placeholder="Nhập mật khẩu" />
          <p>Quên mật khẩu?</p>
          <button class="btn" type="submit">Đăng nhập</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ChooseCandidate from '@/components/ChooseCandidate.vue'
import TopHeaderComponent from '@/components/TopHeaderComponent.vue'
export default {
  name: 'CandidateLogin',
  components:{
    ChooseCandidate,
    TopHeaderComponent
  }
};
</script>

<style scoped>
.tab {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.tab button{
  color: #6874D7;
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

.login-form input{
  margin-bottom: 20px;
  width: 500px;
  height: 50px;
  border-radius: 10px;
  border-color: #f1eded;;
  padding: 20px;
}

.login-form p{
  float: right;
}

.login-form button{
  width: 500px;
  height: 50px;
  background-color: #6874D7;
  color: white;
}

</style>

