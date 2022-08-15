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
          <div class="titleRight">Ngoại ngữ - Tin học</div>

          <div class="container text-center mt-4">
            <div>
              <div class="row d-flex">
                <div class="col-4 thead">
                  <span class="title">Ngoại Ngữ</span>
                </div>
                <div class="col-4 thead">
                  <span class="title">Chứng chỉ</span>
                </div>
                <div class="col-3 thead">
                  <span class="title">Số điểm</span>
                </div>
                <div class="col-1 thead"></div>
              </div>
              <div v-if="!isListLanguage" class="pt-4">
                <div>Không có bằng ngôn ngữ - tin học</div>
                <button @click="addLanguageCertificate(userId)" class="py-1 px-3 btnAdd">
                  Thêm +
                </button>
              </div>
              <div
                class="row d-flex tbody"
                v-for="language in listLanguage"
                v-bind:key="language.id"
              >
                <div class="col-4">{{ language.name }}</div>
                <div class="col-4">{{ language.certificate_name }}</div>
                <div class="col-3">{{ language.mark }}</div>
                <div class="col-1" style="padding: 0">
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
                      <span class="dropdown-item" @click="addLanguageCertificate(userId)"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-plus-circle"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                          />
                          <path
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                          />
                        </svg>
                        Thêm</span
                      >
                      <span
                        class="dropdown-item"
                        @click="editLanguageCertificate(language.id)"
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
                      <DeleteLanguageCertificateModal :id="language.id" /></div
                  ></span>
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
import LanguageCertificateService from "@/services/LanguageCertificateService.js";
import Header from "@/views/ToanNT16/candidate/candidate_management/Header.vue";
import Profile_menu from "@/components/ProfileCandidate/profile_menu.vue";
import DeleteLanguageCertificateModal from "./modal/DeleteLanguageCertificateModal.vue";
import Navigator from "../ToanNT16/candidate/candidate_management/Navigator.vue";
export default {
  name: "ViewNgoaiNguTinHoc",
  components: {
    Header,
    Profile_menu,
    DeleteLanguageCertificateModal,
    Navigator,
  },

  data() {
    return {
      listLanguage: [],
      userId: "",
      isListLanguage: false,
    };
  },
  methods: {
    getLanguageCertificate() {
      const theLoggedUser = JSON.parse(window.localStorage.getItem("user"));
      this.userId = theLoggedUser.user.id;
      LanguageCertificateService.getLanguageCertificate(this.userId).then((res) => {
        this.listLanguage = res.data;
        if (res.data) {
          this.isListLanguage = true;
        } else {
          this.isListLanguage = false;
        }
      });
    },
    addLanguageCertificate(userId) {
      this.$router.push({
        name: "AddLanguageCertificate",
        params: { userId: userId },
      });
    },

    editLanguageCertificate(languageId) {
      this.$router.push({
        name: "EditLanguageCertificate",
        params: { id: languageId, userId: this.userId },
      });
    },
  },
  created() {
    this.getLanguageCertificate();
  },
};
</script>

<style scoped>
.container {
  margin-left: 15px;
}
.thead {
  border-bottom: 1px solid gray;
  color: #2a3563;
  padding-bottom: 15px;
}
.tbody {
  padding-top: 10px;
  border-bottom: 1px solid lightgray;
}
.title {
  font-weight: bold;
  font-size: 16px;
}
.titleRight {
  margin-bottom: 20px;
  margin-left: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
  width: 155px;
  color: #2a3563;
  font-weight: bold;
}
.blockright {
  border-left: 1px solid gray;
}
.body {
  border: 1px solid blue;
  border-radius: 5px;
  box-shadow: 5px 5px lightgray;
}

.btnAdd {
  background-color: #eceefa;
  color: #333333;
  border: 1px solid lightgray;
  border-radius: 5px;
}
.dropdown-item {
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
}
.remove {
  color: red;
  border-bottom: none;
}
</style>
