<template>
  <div class="header">
    <div class="menu" v-on:click="isClicked = !isClicked">
        <img src="@/assets/sub_icon2.png" alt="" class="w-100 h-100">
    </div>
    <div class="login-regist">
      <router-link to="/candidateLogin">Đăng nhập</router-link><span>/</span><router-link to="/candidateRegister">Đăng ký</router-link>
    </div>
    <div v-if="isClicked" class="menu-container">
      <div>
        <img src="@/assets/ic_new6.png" alt=""><span>Nhà tuyển dụng</span>
      </div>
      <div>
        <img src="@/assets/ic_new5.png" alt=""><span>Ứng viên</span>
      </div>
      <div>
        <img src="@/assets/icon_vlquanhday.png" alt=""><span>Tìm ứng viên gần đây</span>
      </div>
      <div>
        <img src="@/assets/icon_trangvang.png" alt=""><span>Tìm công việc gần đây</span>
      </div>
      <div>
        <img src="@/assets/icon_free_dt.png" alt=""><span>Đăng tin miễn phí</span>
      </div>
      <div>
        <img src="@/assets/icon_free_dt.png" alt=""><span>Việc làm từ xa</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      isClicked: false,
    };
  },
};
</script>

<style scoped>
.menu {
  color: white;
  width: 40px;
  height: 34px;
  border-radius: 10px;
  background-color: #232f87;
  text-align: center;
  padding: 3px;
  margin-right: 10px;
}

.menu-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 15px;
  position: absolute;
  width: 210px;
  height: 200px;
  right: 50px;
  top: 52px;
  background: #ffffff;
  box-shadow: 0px 2px 19px rgba(51, 51, 51, 0.5);
  border-radius: 10px;
  color: #4C5BD4;
}

.menu-container svg{
  margin-right: 10px
}

.menu img {
  width: 20px;
  height: 20px;
}

.header {
  background-color: #4c5bd4;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 50px;
  padding: 8px;
}

.login-regist {
  color: white;
  width: 172px;
  height: 34px;
  border-radius: 10px;
  background-color: #232f87;
  text-align: center;
  padding: 4px;
  margin-right: 30px;
}

.login-regist span{
  padding: 5px;
}

.login-regist a{
  color: white;
  text-decoration: none;
}
</style>