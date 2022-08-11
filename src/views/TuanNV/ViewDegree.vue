<template>
  <div id="app" class="row">
    <div class="col-sm-2" id="slide_bar">
      <SlideBar_candidate />
    </div>
    <div class="col-sm-10">
      <Header />
      <div class="body mx-2 pl-2 py-2 d-flex mt-4 row">
        <div class="leftHoso">
          <Profile_menu />
        </div>
        <div class="blockright col-9">
          <div class="titleRight">Học vấn - bằng cấp</div>
          <div class="container">
            <div v-if="!listDegree.length">Bạn chưa có bằng cấp học vấn</div>
            <div class="mb-3">
              <button class="btnAdd py-1 px-3" @click="addDegree">+ Thêm</button>
            </div>
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
                    <span class="dropdown-item remove" @click="deleteDegree(degree.id)"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash3"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                        />
                      </svg>
                      Xóa</span
                    >
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
                  <span class="font-weight-bold">Từ: </span
                  ><span>{{ countYear(degree.startTime, degree.endTime) }}</span>
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
import SlideBar_candidate from "@/components/ProfileCandidate/slideBar_candidate.vue";
import Header from "../ToanNT16/candidate/candidate_management/Header.vue";
import Profile_menu from "@/components/ProfileCandidate/profile_menu.vue";
import DegreeService from "@/services/DegreeService";
export default {
  name: "ViewDegree",
  components: {
    SlideBar_candidate,
    Header,
    Profile_menu,
  },
  data() {
    return {
      userId: "",
      listDegree: [],
    };
  },
  methods: {
    showDetail(e) {
      // console.log(e.target.nextElementSibling);
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
      });
    },
    countYear(date1, date2) {
      var year1 = date1.substring(0, 4); // get only two digits
      var month1 = date1.substring(5, 7);
      var day1 = date1.substring(8, 10);
      date1 = day1 + "/" + month1 + "/" + year1;
      var year2 = date2.substring(0, 4); // get only two digits
      var month2 = date2.substring(5, 7);
      var day2 = date2.substring(8, 10);
      date2 = day2 + "/" + month2 + "/" + year2;
      if (year2 - year1 == 0) {
        return (
          date1 + " - " + date2 + "(" + (parseInt(month2) - parseInt(month1) + " tháng)")
        );
      } else if (month2 - month1 == 0) {
        return date1 + " - " + date2 + "(" + (parseInt(day2) - parseInt(day1) + " ngày)");
      } else
        return (
          date1 + " - " + date2 + "(" + (parseInt(year2) - parseInt(year1) + " năm)")
        );
    },
    deleteDegree(id) {
      let textConfirm = "Nhấn OK để xóa bằng cấp của bạn";
      if (confirm(textConfirm) == true) {
        DegreeService.deleteDegree(id, this.userId)
          .then(() => {
            this.$store.dispatch("setSnackbar", {
              text: "Xóa thành công",
            });
            location.reload();
          })
          .catch(() => {
            this.$store.dispatch("setSnackbar", {
              color: "error",
              text: "Có lỗi xảy ra! Vui lòng thử lại",
            });
          });
      }
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
