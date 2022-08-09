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
          <div class="titleRight">Ngoại ngữ- Tin học</div>

          <div class="container">
            <v-form ref="form">
              <div class="row">
                <div class="col-12">
                  <div class="title">
                    <span>Ngoại ngữ <span class="star">*</span></span>
                    <div class="right">
                      <span>(</span><span class="star">*</span><span>)Thông tin bắt buộc</span>
                    </div>
                  </div>
                  <div>
                    <v-select :items="language" label="Chọn ngôn ngữ" :rules="languageNameRules" required
                      v-model="languageName">
                    </v-select>
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span>Chứng chỉ <span class="star">*</span></span>
                  </div>
                  <div>
                    <v-textarea label="Chứng chỉ" v-model="certificateName" outlined filled no-resize rows="1"
                      :rules="certificateNameRules" required background-color="white"></v-textarea>
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span>Số điểm <span class="star">*</span></span>
                  </div>
                  <v-textarea label="Số điểm" v-model.number="grade" outlined filled no-resize rows="1"
                    :rules="inputGradeRules" required background-color="white"></v-textarea>
                </div>
                <div class="text-center container">
                  <button class="btn btn-primary btnSave px-5 mt-5" @click.prevent="updateLanguageCertificate">
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
  name: "EditLanguageCertificate",
  components: {
    SlideBar_candidate,
    Header,
    Profile_menu,
  },
  data() {
    return {
      Id: this.$route.params.id,
      userId: this.$route.params.userId,
      grade: "",
      inputGradeRules: [
        (v) => v >= 0 || 'Minimum length is 3 character',
        (v) => !!v || "Grade must be required"
      ],
      certificateName: "",
      certificateNameRules: [
        (v) => !!v || "Tên chứng chỉ không được để trống"
      ],
      languageName: "",
<<<<<<< HEAD
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
=======
      language: ["Tiếng Anh", "Tiếng Nhật", "Tiếng Hàn Quốc"],
      languageNameRules: [
        (v) => !!v || "Vui lòng chọn ngôn ngữ"
      ]
    }
>>>>>>> 6928e5a27e763b346a769c91688819d34792011e
  },
  methods: {
    getLanguageCertificate(id) {
      LanguageCertificateService.findLanguageCertificate(id).then((res) => {
        this.languageName = res.data.name;
        this.certificateName = res.data.certificateName;
        this.grade = res.data.grade;
      });
    },
    updateLanguageCertificate() {
      if (this.$refs.form.validate()) {
        LanguageCertificateService.updateLanguageCertificate({ id: this.Id, certificate_name: this.certificateName, name: this.languageName, mark: this.grade, userId: this.userId });
        alert("Cập nhật thành công");
        window.location = "/language";
      }
    }
  },
  created() {
    this.getLanguageCertificate(this.Id);
  }
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
.titleRight {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 15px;
  border-bottom: 1px solid gray;
  width: 150px;
  color: #2a3563;
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
}
</style> 
