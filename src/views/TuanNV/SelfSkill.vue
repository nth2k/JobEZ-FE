<template>
  <div id="app" class="row">
    <div class="col-sm-2" id="slide_bar">
      <Navigator />
    </div>
    <div class="col-sm-10">
      <Header />
      <div class="body mx-2 pl-2 py-2 d-flex mt-4 row">
        <div class="leftHoso">
          <profile_menu />
        </div>
        <div class="blockright col-9">
          <div class="titleRight">Kỹ năng bản thân</div>
          <div class="container mt-4">
            <v-form ref="form">
              <div class="form-group shadow-textarea">
                <v-textarea
                  v-model="selfSkill"
                  filled
                  label="Mô tả ngắn gọn về kỹ năng bản thân"
                  auto-grow
                  background-color="white"
                  outlined
                  required
                ></v-textarea>
              </div>
              <div class="row">
                <div class="d-flex col-12 justify-content-center">
                  <button class="btn btn-primary px-5" @click.prevent="updateSelfSkill">
                    Lưu
                  </button>
                </div>
              </div>
            </v-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profile_menu from "@/components/ProfileCandidate/profile_menu.vue";
import SelfSkillService from "@/services/SelfSkillService";
import Header from "@/views/ToanNT16/candidate/candidate_management/Header.vue";
import Navigator from "../ToanNT16/candidate/candidate_management/Navigator.vue";
// import profile_menu from "@/components/ProfileCandidate/profile_menu.vue";
export default {
  name: "SelfSkill",
  components: {
    profile_menu,
    Header,
    Navigator,
  },
  data() {
    return {
      selfSkill: "",
      // selfSkillRules: [(v) => !!v || "Self Skill must be required"],
      userId: "",
    };
  },
  methods: {
    getSelfSkill() {
      const theLoggedUser = JSON.parse(window.localStorage.getItem("user"));
      this.userId = theLoggedUser.user.id;
      SelfSkillService.getSelfSkill(this.userId).then((rs) => {
        this.selfSkill = rs.data.selfSkill;
      });
    },
    updateSelfSkill() {
      SelfSkillService.updateSelfSkill({
        selfSkill: this.selfSkill,
        userId: this.userId,
      })
        .then(() => {
          this.$store.dispatch("setSnackbar", {
            text: "Cập nhật thành công",
          });
          // location.reload();
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
    this.getSelfSkill();
  },
};
</script>

<style scoped>
.right {
  margin-left: 40px;
  font-size: 14px;
}
.titleRight {
  margin-bottom: 20px;
  margin-left: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
  width: 136px;
  color: #2a3563;
  font-weight: bold;
}
.title {
  font-weight: bold;
  margin-right: 5px;
}
.blockright {
  border-left: 1px solid gray;
}
.body {
  border: 1px solid blue;
  border-radius: 5px;
  box-shadow: 5px 5px lightgray;
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
</style>
