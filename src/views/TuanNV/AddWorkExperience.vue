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
        <div class="right col-9">
          <div class="titleheader">Kinh nghiệm làm việc</div>
          <div class="container ml-2">
            <v-form ref="form">
              <div class="row block2">
                <div class="col-12">
                  <div class="title">
                    <span class="label">Chức danh vị trí <span class="star">*</span></span>
                    <div class="titleright">
                      <span>(</span><span class="star">*</span><span>)Thông tin bắt buộc</span>
                    </div>
                  </div>
                  <div>
                    <!-- <v-text-field class="mt-3" label="Nhập chức danh" outlined dense v-model="position"
                      :rules="positionRules" required></v-text-field> -->
                    <v-textarea label="Nhập chức danh" v-model="position" outlined filled no-resize rows="1"
                      :rules="positionRules" required background-color="white"></v-textarea>
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span class="label">Công ty
                      <span class="star">*</span></span>
                  </div>
                  <div>
                    <!-- <v-text-field class="mt-3" label="Nhập tên công ty" outlined dense v-model="companyName"
                      :rules="companyNameRules" required></v-text-field> -->
                    <v-textarea label="Nhập tên công ty" v-model="companyName" outlined filled no-resize rows="1"
                      :rules="companyNameRules" required background-color="white"></v-textarea>
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span class="label">Thời gian (dd/mm/yyyy) <span class="star">*</span></span>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div class="col-5" style="padding-left: 0; padding-right: 0">
                      <!-- <v-text-field class="mt-3" label="Ngày bắt đầu" outlined dense v-model="startDate"
                        :rules="startDateRules" required></v-text-field> -->
                      <v-textarea label="Ngày bắt đầu" v-model="startDate" outlined filled no-resize rows="1"
                        :rules="startDateRules" required background-color="white"></v-textarea>
                    </div>
                    <div class="col-5" style="padding-left: 0; padding-right: 0">
                      <!-- <v-text-field class="mt-3" label="Ngày kết thúc" outlined dense v-model="endDate"
                        :rules="endDateRules" required value="asdasdasd"></v-text-field> -->
                      <v-textarea label="Ngày kết thúc" v-model="endDate" outlined filled no-resize rows="1"
                        :rules="endDateRules" required background-color="white"></v-textarea>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span class="py-2 label">Mô tả công việc <span class="star">*</span></span>
                  </div>
                  <v-textarea v-model="description" :rules="descriptionRules" filled label="Mô tả công việc" auto-grow
                    background-color="white" outlined required></v-textarea>
                  <!-- <div class="form-group shadow-textarea">
                    <v-textarea v-model="description"
                      class="form-control z-depth-1"
                      label="Mô tả công việc"
                      rows="5"
                      :rules="descriptionRules"
                      required
                      ></v-textarea>
                  </div> -->
                  <div class="row">
                    <div class="col-12 text-center">
                      <button class="btn btn-primary btnSave" @click.prevent="addWorkExp">Lưu</button>
                    </div>
                  </div>
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
import WorkExperienceService from "@/services/WorkExperienceService.js";
export default {
  name: "AddWorkExperience",
  components: {
    SlideBar_candidate,
    Header,
    Profile_menu,
  },
  data() {
    return {
      userId: 3,
      position: "",
      positionRules: [
        (v) => !!v || "Position must be required"
      ],
      companyName: "",
      companyNameRules: [
        (v) => !!v || "Company Name must be required"
      ],
      startDate: "",
      startDateRules: [
        (v) => !!v || "Start Date must be required",
        (v) => /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/.test(v) || "Invalid Start Date(dd/MM/yyyy)"
      ],
      endDate: "",
      endDateRules: [
        (v) => !!v || "End Date must be required",
        (v) => /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/.test(v) || "Invalid End Date(dd/MM/yyyy)"
      ],
      description: "",
      descriptionRules: [
        (v) => !!v || "Description must be required"
      ],
    }
  },
  methods: {
    async addWorkExp() {
      if (this.$refs.form.validate()) {
        var inputStartDate = new Date(this.startDate);
        var inputEndDate = new Date(this.endDate);
        if(inputStartDate.getTime() >= inputEndDate.getTime()){
          alert('EndDate can not greater than StartDate\nPlease check again!');
        }else{
          var [day, month, year] = this.startDate.split('/');
          this.startDate = [year, month, day].join('-');
          [day, month, year] = this.endDate.split('/');
          this.endDate = [year, month, day].join('-');
          WorkExperienceService.addWorkExp(
            { 
              companyName: this.companyName, 
              position: this.position, 
              description: this.description, 
              startDate: this.startDate, 
              endDate: this.endDate, 
              userId: this.userId
            });
          window.location = "/workexp";
          alert('Thêm thành công');
        }
      }
    }
  }
};
</script>

<style scoped>
.body {
  border: 1px solid blue;
  border-radius: 5px;
  box-shadow: 5px 5px lightgray;
}
.star {
  color: red;
}
.right {
  border-left: 1px solid gray;
}
.titleright {
  float: right;
  font-weight: initial;
  font-size: 12px;
  font-style: italic;
}
.title {
  font-weight: bold;
}
.col-12 {
  margin: 0;
  padding: 0;
}
.titleheader {
  margin-left: 0.5rem;
  margin-bottom: 20px;
  border-bottom: 1px solid gray;
  width: 203px;
  color: #2A3563;
  font-size: 20px;
  font-weight: bold;
}
.label {
  font-size: 15px;
}
.btnSave{
  padding: 5px 70px;
}
</style> 
