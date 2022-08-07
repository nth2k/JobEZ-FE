<template>
  <div id="app" class="row">
    <div class="col-sm-2" id="slide_bar">
      <SlideBar_candidate />
    </div>
    <div class="col-sm-10">
      <Header />
      <div class="body mx-2 pl-2 py-2 d-flex mt-4 row">
        <div class="leftHoso">
          <profile_menu />
        </div>
        <div class="right ml-4">
          <div class="title titleRight mb-3">
            <span class="pb-2">Mục tiêu nghề nghiệp</span>
          </div>
          <v-form ref="form">
            <div class="form-group shadow-textarea">
              <v-textarea
                v-model="careerGoal"
                :rules="careerGoalRules"
                filled
                label="Mô tả ngắn ngọn mục tiêu nghề nghiệp"
                auto-grow
                background-color="white"
                outlined
                required
              ></v-textarea>
            </div>
            <div class="row">
              <div class="d-flex col-12 justify-content-center">
                <button class="btn btn-primary px-5" @click.prevent="updateCareerGoal">
                  Lưu
                </button>
              </div>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profile_menu from "@/components/ProfileCandidate/profile_menu.vue";
import SlideBar_candidate from "@/components/ProfileCandidate/slideBar_candidate.vue";
import Header from "@/views/ToanNT16/candidate/candidate_management/Header.vue";
import CareerGoalService from "@/services/CareerGoalService";
export default {
  name: "CareerGoal",
  components: {
    profile_menu,
    SlideBar_candidate,
    Header,
  },
  data() {
    return {
      careerGoal: "",
      careerGoalRules: [(v) => !!v || "Career Goal must be required"],
      userId: 1,
    };
  },
  methods: {
    getCareerGoal(id) {
      CareerGoalService.getCareerGoal(id).then((rs) => {
        this.id = rs.data.id;
        this.careerGoal = rs.data.careerGoal;
      });
    },
    updateCareerGoal() {
      CareerGoalService.updateCareerGoal({
        id: this.id,
        careerGoal: this.careerGoal,
        userId: this.userId,
      })
        .then(() => {
          this.$store.dispatch("setSnackbar", {
            text: "Cập nhật thành công",
          });
          this.$router.push("/careergoal");
        })
        .catch(() => {
          this.$store.dispatch("setSnackbar", {
            color: "error",
            text: "Có lỗi xảy ra! Vui lòng thử lại",
          });
        });
    },
  },
  created() {
    this.getCareerGoal(this.userId);
  },
};
</script>

<style scoped>
.leftHoso {
  flex: 0 0 20%;
}
.right {
  margin-left: 40px;
  font-size: 14px;
}
.title {
  font-weight: bold;
  margin-right: 5px;
}
.body {
  border: 1px solid blue;
  border-radius: 5px;
  box-shadow: 5px 5px lightgray;
}
.right {
  flex: 0 0 80%;
  max-width: 70%;
}
span {
  border-bottom: 1px solid #2a3563cc;
  color: #2a3563cc;
  font-size: 16px;
  font-weight: 18px;
}
textarea {
  border-radius: 10px;
  resize: none;
}
.leftHoso {
  border-right: 1px solid lightgray;
}
</style>
