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
          <div class="titleRight">Kinh nghiệm làm việc</div>
          <div class="container">
            <div class="mb-3">
              <button class="btnAdd py-1 px-3" @click="addWorkExp()">+ Thêm</button>
            </div>
            <div v-if="!isListWorkExp">Không có kinh nghiệm làm việc</div>
            <div class="block" v-for="workexp in listWorkExp" v-bind:key="workexp.id">
              <DeleteWorkExperienceModal :id="workexp.id" />
              <span id="show" @click="showDetail">
                <i class="animate-icon fa fa-chevron-up" aria-hidden="true"></i>Công ty
                {{ workexp.companyName }}
              </span>

              <div class="detail container p-3" id="detailInfo">
                <div>
                  <span class="font-weight-bold">Thời gian từ: </span
                  ><span>{{ new Date(workexp.startDate).toLocaleDateString() }}</span
                  ><span class="font-weight-bold"> Đến </span
                  ><span>{{ new Date(workexp.endDate).toLocaleDateString() }}</span>
                </div>
                <div>
                  <span class="font-weight-bold">Chức danh: </span
                  ><span> {{ workexp.position }}</span>
                </div>
                <div>
                  <span>{{ workexp.description }} </span>
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
import WorkExperienceService from "@/services/WorkExperienceService.js";
import DeleteWorkExperienceModal from "./modal/DeleteWorkExperienceModal.vue";
import Navigator from "../ToanNT16/candidate/candidate_management/Navigator.vue";
export default {
  name: "ViewWorkExperience",
  components: {
    Header,
    Profile_menu,
    DeleteWorkExperienceModal,
    Navigator,
  },
  data() {
    return {
      listWorkExp: [],
      userId: "",
      isListWorkExp: false,
    };
  },
  methods: {
    showDetail(e) {
      // console.log(e.target.nextElementSibling);
      const detail = e.target.nextElementSibling;
      const icon = e.target.firstChild;
      if (detail.style.display == "none") {
        detail.style.display = "block";
        icon.classList.toggle("rotate");
      } else {
        detail.style.display = "none";
        icon.classList.toggle("rotate");
      }
    },
    addWorkExp() {
      this.$router.push({
        name: "AddWorkExperience",
        params: { userId: this.userId },
      });
    },
    getAllWorkExp() {
      const theLoggedUser = JSON.parse(window.localStorage.getItem("user"));
      this.userId = theLoggedUser.user.id;
      WorkExperienceService.getWorkExps(this.userId).then((res) => {
        this.listWorkExp = res.data;
        if (res.data) {
          this.isListWorkExp = true;
        } else {
          this.isListWorkExp = false;
        }
      });
    },
  },
  created() {
    this.getAllWorkExp();
  },
};
</script>

<style scoped>
.btnDelete {
  background: red;
  color: white;
  border-radius: 50%;
  border: none;
  float: right;
  width: 25px;
  height: 25px;
}
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
a {
  text-decoration: none;
  font-size: 18px;
}
#show {
  color: #2a3563;
  margin-bottom: 20px;
  font-size: 20px;
  cursor: pointer;
}
.btnAdd {
  background-color: #eceefa;
  color: #333333;
  border: 1px solid lightgray;
  border-radius: 5px;
}
.tbody {
  padding-top: 10px;
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
  width: 165px;
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
</style>
