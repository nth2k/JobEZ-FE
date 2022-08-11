<template>
  <div id="app" class="row">
    <div class="col-sm-2" id="slide_bar">
      <SlideBar_candidate />
    </div>
    <div class="col-sm-10">
      <Header />
      <div class="mx-2 my-2 body mt-3 py-3 row">
        <div class="leftHoso">
          <Profile_menu />
        </div>
        <div class="blockright col-9">
          <div class="titleheader">Ngoại ngữ- Tin học</div>
          <div class="container ml-3">
            <v-form ref="form">
              <div class="row">
                <div class="col-12">
                  <div class="title">
                    <span class="label">Ngoại ngữ <span class="star">*</span></span>
                    <div class="titleright">
                      <span>(</span><span class="star">*</span
                      ><span>)Thông tin bắt buộc</span>
                    </div>
                  </div>
                  <div>
                    <v-select
                      :items="language"
                      label="Chọn ngôn ngữ"
                      outlined
                      :rules="languageNameRules"
                      v-model="languageName"
                      required
                    ></v-select>
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span class="label">Chứng chỉ <span class="star">*</span></span>
                  </div>
                  <div>
                    <v-textarea
                      label="Chứng chỉ"
                      v-model="certificateName"
                      outlined
                      filled
                      no-resize
                      rows="1"
                      :rules="certificateNameRules"
                      required
                      background-color="white"
                    ></v-textarea>
                    <span class="label">Số điểm <span class="star">*</span></span>
                  </div>
                  <v-textarea
                    label="Số điểm"
                    v-model.number="grade"
                    outlined
                    filled
                    no-resize
                    rows="1"
                    :rules="inputGradeRules"
                    required
                    background-color="white"
                  ></v-textarea>
                </div>
                <div class="text-center container">
                  <button
                    class="btn btn-primary btnSave px-5 mt-5"
                    @click.prevent="addLanguageCertificate"
                  >
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
import SlideBar_candidate from "@/components/ProfileCandidate/slideBar_candidate.vue";
import Header from "../ToanNT16/candidate/candidate_management/Header.vue";
import Profile_menu from "@/components/ProfileCandidate/profile_menu.vue";
import LanguageCertificateService from "@/services/LanguageCertificateService";
export default {
  name: "AddLanguageCertificate",
  components: {
    SlideBar_candidate,
    Header,
    Profile_menu,
  },
  data() {
    return {
      userId: this.$route.params.userId,
      grade: "",
      inputGradeRules: [
        (v) => !!v || "Số điểm không được để trống",
        (v) => v > 0 || "Số điểm phải lớn hơn 0",
      ],
      certificateName: "",
      certificateNameRules: [(v) => !!v || "Tên chứng chỉ không được để trống"],
      languageName: "",
      language: [
        "Tiếng Anh",
        "Tiếng Nhật",
        "Tiếng Hàn",
        "Tiếng Nga",
        "Tiếng Trung",
        "Tiếng Pháp",
      ],
      languageNameRules: [(v) => !!v || "Vui lòng chọn ngôn ngữ"],
    };
  },
  methods: {
    addLanguageCertificate() {
      if (this.$refs.form.validate()) {
        LanguageCertificateService.isDuplicate({
          certificate_name: this.certificateName,
          name: this.languageName,
          mark: this.grade,
          userId: this.userId,
        })
          .then((rs) => {
            if (!rs.data) {
              LanguageCertificateService.addLanguageCertificate({
                certificate_name: this.certificateName,
                name: this.languageName,
                mark: this.grade,
                userId: this.userId,
              })
                .then(() => {
                  this.$store.dispatch("setSnackbar", {
                    text: "Thêm thành công",
                  });
                  this.$router.push("/language");
                })
                .catch(() => {
                  this.$store.dispatch("setSnackbar", {
                    color: "error",
                    text: "Có lỗi xảy ra! Vui lòng thử lại",
                  });
                });
            } else {
              this.$store.dispatch("setSnackbar", {
                color: "error",
                text: "Chứng chỉ này đã tồn tại",
              });
            }
          })
          .catch(() => {
            this.$store.dispatch("setSnackbar", {
              color: "error",
              text: "Có lỗi xảy ra! Vui lòng thử lại",
            });
          });
      }
    },
  },
};
</script>

<style scoped>
.star {
  color: red;
}
.right {
  float: right;
  font-style: italic;
  font-size: 12px;
}
.body {
  border: 1px solid blue;
  border-radius: 5px;
  box-shadow: 5px 5px lightgray;
}
.title {
  font-weight: bold;
}
.col-12 {
  margin: 0;
  padding: 0;
}
.titleright {
  float: right;
  font-weight: initial;
  font-size: 12px;
  font-style: italic;
}
.titleheader {
  margin-left: 0.5rem;
  margin-bottom: 20px;
  border-bottom: 1px solid gray;
  width: 183px;
  color: #2a3563;
  font-size: 20px;
  font-weight: bold;
}

.blockright {
  border-left: 1px solid gray;
}

.title {
  margin: 5px 0;
}

.btnSave {
  color: white;
  padding: 5px 70px;
}
.label {
  font-size: 15px;
}
</style>
