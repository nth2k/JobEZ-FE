<template>
  <div id="app" class="row">
    <div class="col-sm-2" id="slide_bar">
      <Navigator />
    </div>
    <div class="col-sm-10">
      <Header />
      <div class="mx-2 my-2 body mt-3 py-3 row">
        <div class="leftHoso">
          <Profile_menu />
        </div>
        <div class="right col-9">
          <div class="titleheader">Công việc mong muốn</div>
          <div class="container">
            <v-form ref="form">
              <div class="row">
                <div class="col-5">
                  <span class="label">Công việc<span class="text-danger">*</span></span>
                  <!-- <v-textarea
                    label="Công việc mong muốn"
                    v-model="desiredJob"
                    outlined
                    filled
                    no-resize
                    rows="1"
                    :rules="desiredJobRules"
                    required
                    background-color="white"
                  ></v-textarea> -->
                  <v-text-field
                    label="Công việc mong muốn"
                    outlined
                    dense
                    v-model="desiredJob"
                    :rules="desiredJobRules"
                    required
                  ></v-text-field>
                  <span class="label">Hình thức<span class="text-danger">*</span></span>
                  <v-select
                    v-model="workingForm_id"
                    :items="listWorkingForm"
                    :rules="workingFormRules"
                    label="Chọn hình thức làm việc"
                    item-text="name"
                    item-value="id"
                    outlined
                  ></v-select>
                </div>
                <div class="col-2"></div>
                <div class="col-5">
                  <span class="label"
                    >Cấp bậc mong muốn<span class="text-danger">*</span></span
                  >
                  <v-select
                    v-model="rank_id"
                    :items="listRank"
                    :rules="rankNameRules"
                    label="Chọn cấp bậc mong muốn"
                    item-text="name"
                    item-value="id"
                    outlined
                  ></v-select>
                  <span class="label">Kinh nghiệm<span class="text-danger">*</span></span>
                  <v-select
                    outlined
                    v-model="experience_id"
                    :items="listexp"
                    label="Chọn kinh nghiệm"
                    item-text="name"
                    item-value="id"
                    :rules="experienceRules"
                  ></v-select>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <span class="label">Mức lương<span class="text-danger">*</span></span>
                  <v-select
                    v-model="salary_id"
                    :items="listSalary"
                    :rules="salaryRules"
                    label="Chọn mức lương"
                    item-text="name"
                    item-value="id"
                    outlined
                  ></v-select>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <span class="label">Địa Điểm<span class="text-danger">*</span></span>
                  <div>
                    <multiselect
                      v-model="place"
                      tag-placeholder="Chọn 1 - 3 địa điểm"
                      placeholder="Chọn 1 - 3 địa điểm"
                      label="name"
                      track-by="id"
                      :options="listPlace"
                      :multiple="true"
                      :taggable="true"
                      @tag="addTag"
                    >
                    </multiselect>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="text-center container">
                  <button class="btn btn-primary px-5" @click.prevent="saveDesiredJob">
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
import Header from "../ToanNT16/candidate/candidate_management/Header.vue";
import Profile_menu from "@/components/ProfileCandidate/profile_menu.vue";
import Multiselect from "vue-multiselect";
import ProvinceDistrictService from "@/services/ProvinceDistrictService";
import Navigator from "../ToanNT16/candidate/candidate_management/Navigator.vue";
import DesiredJobService from "@/services/DesiredJobService.js";
export default {
  name: "EditDesiredJob",
  components: {
    Header,
    Profile_menu,
    Multiselect,
    Navigator,
  },
  data() {
    return {
      userId: this.$route.params.userId,
      desiredJob_id: "",
      desiredJob: "",
      desiredJobRules: [(v) => !!v || "Tên công việc mong muốn không được để trống"],
      place: [],
      placeRules: [(v) => !!v || "Tên địa điểm không được để trống"],
      listPlace: [],
      workingForm_id: "",
      workingFormRules: [(v) => !!v || "Vui lòng chọn hình thức làm việc"],
      listWorkingForm: [],
      rank_id: "",
      rankNameRules: [(v) => !!v || "Vui lòng chọn cấp bậc mong muốn"],
      listRank: [],
      salary_id: "",
      salaryRules: [(v) => !!v || "Vui lòng chọn mức lương"],
      listSalary: [],
      experience_id: "",
      experienceRules: [(v) => !!v || "Vui lòng chọn kinh nghiệm"],
      listexp: [],
    };
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
    },
    getData() {
      ProvinceDistrictService.getAllProvince().then((rs) => {
        this.listPlace = rs.data.provinces;
        this.listSalary = rs.data.salaries;
        this.listexp = rs.data.yearOfExperiences;
        this.listRank = rs.data.ranks;
        this.listWorkingForm = rs.data.workingForms;
      });
      DesiredJobService.getDesiredJobByUserId(this.userId).then((rs) => {
        this.desiredJob_id = rs.data.id;
        this.desiredJob = rs.data.jobName;
        this.workingForm_id = rs.data.workingFormId;
        this.experience_id = rs.data.yearOfExpId;
        this.rank_id = rs.data.rankId;
        this.salary_id = rs.data.salaryId;
        this.place = rs.data.address;
      });
    },
    saveDesiredJob() {
      DesiredJobService.updateDesiredJob({
        rankId: this.rank_id,
        WorkingFormId: this.workingForm_id,
        yearOfExperienceId: this.experience_id,
        salaryId: this.salary_id,
        addresssId: this.place.map((rs) => rs.id),
        desiredJobName: this.desiredJob,
        desiredId: this.desiredJob_id,
        postingCategoryId: 1,
      })
        .then(() => {
          console.log(this.desiredJob_id);
          this.$store.dispatch("setSnackbar", {
            text: "Cập nhật thành công",
          });
          this.$router.push("/desiredjob");
        })
        .catch(() => {
          this.$store.dispatch("setSnackbar", {
            color: "error",
            text: "Có lỗi xảy ra vui lòng thử lại",
          });
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.body {
  border: 1px solid blue;
  border-radius: 5px;
  box-shadow: 5px 5px lightgray;
}
select {
  font-size: 14px;
}
.titleright {
  float: right;
  font-weight: initial;
  font-size: 12px;
  font-style: italic;
}
.right {
  border-left: 1px solid gray;
}
.title {
  margin: 5px 0;
  font-weight: bold;
}
.titleheader {
  margin-left: 0.5rem;
  margin-bottom: 20px;
  border-bottom: 1px solid gray;
  width: 191px;
  color: #2a3563;
  font-size: 20px;
  font-weight: bold;
}
.multiselect {
  border: 1px solid gray;
  border-radius: 5px;
  /* font-size: 16px;  */
  /* margin-left: 12px; */
}
.col-12 {
  padding: 0;
  margin-left: 12px;
}

.label {
  font-size: 15px;
}
</style>
