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
            <v-form>
              <div class="row">
                <div class="col-12">
                  <div class="title">
                    <span>Ngoại ngữ <span class="star">*</span></span>
                    <div class="right">
                      <span>(</span><span class="star">*</span
                      ><span>)Thông tin bắt buộc</span>
                    </div>
                  </div>
                  <div>
                    <select v-model="languageName" class="form-control" >
                      <option value="-1">Chọn ngôn ngữ</option>
                      <option value="English">English</option>
                      <option value="Japan">Japan</option>
                      <option value="Korea">Korea</option>
                    </select>
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span>Chứng chỉ <span class="star">*</span></span>
                  </div>
                  <div>
                    <input
                      v-model="certificateName"
                      class="form-control"
                      type="text"
                      id="tenchungchi"
                      placeholder="Tên chứng chỉ"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span>Số điểm <span class="star">*</span></span>
                  </div>
                  <div>
                    <v-text-field v-model.number="grade" class="form-control"
                      type="text"
                      id="sodiem"
                      placeholder="Số điểm"
                      :rules="inputRules"></v-text-field>
                  </div>
                </div>
                <div class="text-center container">
                  <v-btn
                    class="btn btn-primary btnSave px-5 mt-5"
                    @click.prevent="addLanguage"
                  >
                    Lưu
                  </v-btn>
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
// import LanguageCertificateService from "@/services/LanguageCertificateService";
export default {
  name: "AddNgoaiNguTinHoc",
  components: {
    SlideBar_candidate,
    Header,
    Profile_menu, 
  },
  data(){
    return {
      languageName: "",
      certificateName: "",
      grade: "",
      inputRules:[
        v => v.length >= 3 || 'Minimum length is 3 character'
      ]
    }
  },
  methods: {
    addLanguage(){
      console.log(this.certificateName, this.languageName, this.grade);
      // LanguageCertificateService.addLanguage({certificateName: this.languageName, name: this.certificateName, grade: this.grade});
      // alert("Add successful");
      // window.location = "/language";
    }
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