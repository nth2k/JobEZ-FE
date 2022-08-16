<template>
  <div id="app" class="row">
    <div class="col-sm-2" id="slide_bar">
      <Navigator />
    </div>
    <div class="col-sm-10">
      <Header />
      <div class="body mx-2 pl-2 py-2 d-flex mt-4 row">
        <div class="leftHoso">
          <Profile_menu />
        </div>
        <div class="blockright col-9">
          <div class="titleRight">Học vấn - Bằng cấp</div>
          <div class="container">
            <div v-if="!isListDegree" style="margin-bottom: 20px">
              Bạn chưa có bằng cấp học vấn
              <div class="mb-3">
                <button class="btnAdd py-1 px-3" @click="addDegree">+ Thêm</button>
              </div>
            </div>
            <div v-if="isListDegree">
              <div class="block" v-for="degree in listDegree" v-bind:key="degree.id">
                <span id="show" @click="showDetail">
                  <i class="animate-icon fa fa-chevron-up" aria-hidden="true"></i
                  >{{ degree.certificateName }}
                </span>
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
                      <span class="dropdown-item" @click="addDegree"
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
                      <span class="dropdown-item" @click="editDegree(degree.id)"
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
                      <DeleteDegreeModal :id="degree.id" :userId="degree.userId" />
                    </div>
                  </span>
                </div>
                <div class="detail container p-3 mt-2" id="detailInfo">
                  <div>
                    <span class="font-weight-bold">Chuyên ngành: </span
                    ><span>{{ degree.major }}</span>
                  </div>
                  <div>
                    <span class="font-weight-bold">Tại: </span
                    ><span>{{ degree.teachingUnit }}</span>
                  </div>
                  <div>
                    <span class="font-weight-bold">Từ: </span>
                    <span>{{ new Date(degree.startTime).toLocaleDateString() }}</span> -
                    <span>{{ new Date(degree.endTime).toLocaleDateString() }}</span>
                  </div>
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
import Header from "../ToanNT16/candidate/candidate_management/Header.vue";
import Profile_menu from "@/components/ProfileCandidate/profile_menu.vue";
import DegreeService from "@/services/DegreeService";
import DeleteDegreeModal from "./modal/DeleteDegreeModal.vue";
import Navigator from "../ToanNT16/candidate/candidate_management/Navigator.vue";
export default {
  name: "ViewDegree",
  components: {
    Header,
    Profile_menu,
    DeleteDegreeModal,
    Navigator,
  },
  data() {
    return {
      userId: "",
      listDegree: [],
      isListDegree: false,
    };
  },
  methods: {
    showDetail(e) {
      const detail = e.target.nextElementSibling.nextElementSibling;
      const icon = e.target.firstChild;
      if (detail.style.display == "none") {
        detail.style.display = "block";
        icon.classList.toggle("rotate");
      } else {
        detail.style.display = "none";
        icon.classList.toggle("rotate");
      }
    },
    getDegree() {
      const theLoggedUser = JSON.parse(window.localStorage.getItem("user"));
      this.userId = theLoggedUser.user.id;
      DegreeService.getAllDegrees(this.userId).then((rs) => {
        this.listDegree = rs.data;
        if (rs.data) {
          this.isListDegree = true;
        } else {
          this.isListDegree = false;
        }
      });
    },
    addDegree() {
      this.$router.push({
        name: "AddDegree",
        params: { userId: this.userId },
      });
    },
    editDegree(degreeId) {
      this.$router.push({
        name: "EditDegree",
        params: { userId: this.userId, id: degreeId },
      });
    },
  },
  created() {
    this.getDegree();
  },
};
</script>

<style scoped>
.block {
  padding: 20px 0;
  border-bottom: 1px solid lightgray;
}
.block:last-child {
  border-bottom: none;
}
.detail {
  /* display: none; */
  background-color: #f2f2f2;
  transition: 0.5s;
}
#show {
  color: #2a3563;
  margin-bottom: 20px;
  font-size: 20px;
  cursor: pointer;
}
.titleRight {
  margin-bottom: 20px;
  margin-left: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
  width: 150px;
  color: #2a3563;
  font-weight: bold;
}
.btnAdd {
  background-color: #eceefa;
  color: #333333;
  border: 1px solid lightgray;
  border-radius: 5px;
}
.blockright {
  border-left: 1px solid gray;
}
.body {
  border: 1px solid blue;
  border-radius: 5px;
  box-shadow: 5px 5px lightgray;
}
.animate-icon {
  transition: 0.4s;
}
.rotate {
  transform: rotate(180deg);
}
.dropdown-item {
  border-bottom: 1px solid lightgray;
  padding-bottom: 5px;
}
.remove {
  color: red;
  border-bottom: none;
}
</style>
