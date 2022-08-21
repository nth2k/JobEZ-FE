<template>
  <div class="d-flex">
    <div class="w-25" style="background-color: #4c5bd4">
      <router-link to="/">
        <h2 style="color: white; font-size: 30px; padding-left: 40px; padding-top: 5px; text-decoration: none">JobEZ</h2>
      </router-link>
    </div>
    <div class="header w-75">
      <div class="menu" v-on:click="isMenuClicked = !isMenuClicked">
        <img src="@/assets/sub_icon2.png" alt="" class="w-100 h-100" />
      </div>
      <div v-if="!currentUser" class="login-regist">
        <router-link to="/candidateLogin">Đăng nhập</router-link><span>/</span
        ><router-link to="/candidateRegister">Đăng ký</router-link>
      </div>

      <div v-if="currentUser" class="login-regist">
        Xin chào {{ this.handleUser() }}
        <button @click="logout">| Đăng xuất</button>
      </div>
      <img
        v-if="currentUser"
        class="mr-5"
        style="width: 30px; height: 30px"
        src="@/assets/icn_bell.png"
        v-on:click="isNoti = !isNoti"
      />
      <img
        v-if="currentUser"
        v-on:click="isProfileClicked = !isProfileClicked"
        style="border-radius: 50px"
        class="mr-5"
        src="@/assets/ic_ava1.png"
        alt=""
      />
      <div v-if="isMenuClicked" class="menu-container">
        <div>
          <img src="@/assets/ic_new6.png" alt="" /><span>Nhà tuyển dụng</span>
        </div>
        <div>
          <img src="@/assets/ic_new5.png" alt="" /><span>Ứng viên</span>
        </div>
        <div>
          <img src="@/assets/icon_vlquanhday.png" alt="" /><span
            @click="searchCandidate"
            >Tìm ứng viên</span
          >
        </div>
        <div>
          <img src="@/assets/icon_trangvang.png" alt="" /><span
            >Tìm công việc gần đây</span
          >
        </div>
        <div>
          <img src="@/assets/icon_free_dt.png" alt="" /><span
            >Đăng tin miễn phí</span
          >
        </div>
        <div>
          <img src="@/assets/icon_free_dt.png" alt="" /><span
            >Việc làm từ xa</span
          >
        </div>
      </div>

      <div v-if="isProfileClicked" class="profile-container">
        <div class="profile w-100" @click="profile">
          <img src="@/assets/ic_new5.png" alt="" /><span>Quản lý hồ sơ</span>
        </div>
        <div class="profile w-100" @click="account">
          <img src="@/assets/ic_2.png" alt="" /><span>Quản lý tài khoản</span>
        </div>
        <div class="profile w-100" @click="appliedJob">
          <img src="@/assets/ic_3.png" alt="" /><span
            >Việc làm đã ứng tuyển</span
          >
        </div>
        <div class="profile w-100" @click="savedJob">
          <img src="@/assets/ic_4.png" alt="" /><span>Việc làm đã lưu</span>
        </div>
      </div>

      <div v-if="isNoti" class="profile-container">
        <div class="noti">
          <span>Bạn đã trượt phỏng vấn</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      isMenuClicked: false,
      isProfileClicked: false,
      isNoti: false,
    };
  },
  methods: {
    logout() {
      window.localStorage.removeItem("user");
      location.reload();
    },
    handleUser() {
      const theLoggedUser = JSON.parse(window.localStorage.getItem("user"));
      return theLoggedUser.user.name;
    },
    searchCandidate() {
      this.$router.push("/searchCandidate");
    },
    profile() {
      const theLoggedUser = JSON.parse(window.localStorage.getItem("user"));
      if (theLoggedUser.user.roles[0].id == 2) {
        this.$router.push("/general-management");
      }
      if (theLoggedUser.user.roles[0].id == 3) {
        this.$router.push("/recruiterManagement");
      }
    },
    account() {
      this.$router.push("/contactinfo");
    },
    appliedJob() {
      this.$router.push("/appliedjob");
    },
    savedJob() {
      this.$router.push("/savedjobs");
    },
  },
  computed: {
    currentUser() {
      if (window.localStorage.getItem("user") != null) {
        return true;
      } else return false;
    },
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
  right: 100px;
  top: 52px;
  background: #ffffff;
  box-shadow: 0px 2px 19px rgba(51, 51, 51, 0.5);
  border-radius: 10px;
  color: #4c5bd4;
}

.profile-container {
  background: #ffffff;
  color: #4c5bd4;
  width: 210px;
  height: auto;
  top: 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 15px;
  position: absolute;
  box-shadow: 0px 2px 19px rgba(51, 51, 51, 0.5);
  border-radius: 10px;
}

.profile-container :hover {
  cursor: pointer;
  background-color: rgb(225, 221, 221);
}

.noti :hover {
  cursor: pointer;
}

.menu-container svg {
  margin-right: 10px;
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
  width: auto;
  height: auto;
  border-radius: 10px;
  background-color: #232f87;
  text-align: center;
  padding: 5px;
  margin-right: 30px;
}

.login-regist span {
  padding: 10px;
}

.login-regist a {
  color: white;
  text-decoration: none;
}
</style>