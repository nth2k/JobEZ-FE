<template>
  <div id="app" class="row">
    <div class="col-sm-2" id="slide_bar">
      <Navigator />
    </div>
    <div class="col-sm-10">
      <Header />
      <div class="body mx-2 pl-2 py-2 d-flex mt-4 row">
        <div>
          <Profile_menu />
        </div>
        <div class="blockright col-9">
          <div class="titleRight">Thông tin liên hệ</div>
          <div style="padding: 0; float: right">
            <span class="icon_tt">
              <a
                class="nav-link"
                href="#"
                id="userDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src="@/assets/icon_dot.png" class="rounded-circle" />
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="userDropdownMenuLink"
              >
                <span class="dropdown-item" @click="editContactInfo()"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                  Sửa</span
                >
              </div>
            </span>
          </div>
          <div class="container mt-4">
            <div class="row">
              <div class="col-3">
                <img
                  id="myImg"
                  v-if="contactInfo.imageBase64 == null"
                  src="@/assets/no_avatar.jpg"
                  alt="avatar"
                />
                <img
                  id="myImg1"
                  v-if="contactInfo.imageBase64 != null"
                  :src="contactInfo.imageBase64"
                  alt="avatar"
                />
              </div>
              <div class="col-5">
                <div class="data">
                  <span class="label">Họ và tên: </span>
                  <span>{{ contactInfo.fullname }}</span>
                </div>
                <div class="data">
                  <span class="label">Email: </span>
                  <span>{{ contactInfo.email }}</span>
                </div>
                <div class="data">
                  <span class="label">Số điện thoại: </span>
                  <span>{{ contactInfo.phoneNumber }}</span>
                </div>
                <div class="data">
                  <span class="label">Ngày sinh: </span>
                  <span>{{ contactInfo.dateOfBirth }}</span>
                </div>
                <div class="data">
                  <span class="label">Địa chỉ: </span>
                  <span>{{ contactInfo.address }}</span>
                </div>
              </div>
              <div class="col-4">
                <div class="data">
                  <span class="label">Giới tính: </span>
                  <span>{{ contactInfo.gender }}</span>
                </div>
                <div class="data">
                  <span class="label">Hôn nhân: </span>
                  <span>{{ contactInfo.married }}</span>
                </div>
                <div class="data">
                  <span class="label">Tỉnh thành: </span>
                  <span>{{ contactInfo.province }}</span>
                </div>
                <div class="data">
                  <span class="label">Quận huyện: </span>
                  <span>{{ contactInfo.district }}</span>
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
import ContactInfoService from "@/services/ContactInfoService.js";
import Profile_menu from "@/components/ProfileCandidate/profile_menu.vue";
import Header from "../ToanNT16/candidate/candidate_management/Header.vue";
import Navigator from "../ToanNT16/candidate/candidate_management/Navigator.vue";
export default {
  name: "ContactInfo",
  components: { Profile_menu, Header, Navigator },
  data() {
    return {
      contactInfo: "",
      userId: "",
    };
  },
  methods: {
    getContactInfoByUserId() {
      const theLoggedUser = JSON.parse(window.localStorage.getItem("user"));
      this.userId = theLoggedUser.user.id;
      ContactInfoService.getContactInfo(this.userId).then((rs) => {
        this.contactInfo = rs.data;
      });
    },
    editContactInfo() {
      this.$router.push({
        name: "EditContactInfo",
        params: { userId: this.userId },
      });
    },
  },
  created() {
    this.getContactInfoByUserId();
  },
};
</script>

<style scoped>
.body {
  border: 1px solid blue;
  border-radius: 5px;
  box-shadow: 5px 5px lightgray;
}
.label {
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: bold;
}
img {
  width: 65%;
  border-radius: 50%;
}
a {
  font-size: 14px;
}
.titleRight {
  margin-bottom: 20px;
  margin-left: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
  width: 130px;
  color: #2a3563;
  font-weight: bold;
  /* font-size: 20px; */
}
.blockright {
  border-left: 1px solid gray;
}
.body {
  border: 1px solid blue;
  border-radius: 5px;
  box-shadow: 5px 5px lightgray;
}
.data {
  margin: 5px 5px;
}
</style>
