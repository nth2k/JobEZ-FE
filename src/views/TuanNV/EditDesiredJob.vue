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
          <div class="titleheader">Công việc mong muốn</div>
          <div class="container ml-3">
            <v-form ref="form">
              <div class="row block2">
                <div class="col-5">
                  <span class="label">Công việc<span class="text-danger">*</span></span>
                  <!-- <input
                      type="text"
                      class="form-control mb-3"
                      id="inputJob"
                      placeholder="Công việc mong muốn"
                    /> -->
                  <v-textarea
                    label="Công việc mong muốn"
                    v-model="desiredJob"
                    outlined
                    filled
                    no-resize
                    rows="1"
                    :rules="desiredJobRules"
                    required
                    background-color="white"
                  ></v-textarea>

                  <span class="label">Địa Điểm<span class="text-danger">*</span></span>
                  <!-- <select name="married" id="place" class="form-control mb-3">
                      <option value="-1">Chọn từ 1 -3 tinh thành</option>
                      <option value="1">Hà Nội</option>
                      <option value="2">TP. Hồ Chí Minh</option>
                    </select> -->
                  <v-textarea
                    label="Chọn từ 1 -3 tinh thành, ngăn cách bởi dấu ';'"
                    v-model="place"
                    outlined
                    filled
                    no-resize
                    rows="1"
                    :rules="placeRules"
                    required
                    background-color="white"
                  ></v-textarea>
                  <span class="label">Hình thức<span class="text-danger">*</span></span>
                  <!-- <select name="married" id="hinhthuc" class="form-control mb-3">
                      <option value="-1">Chọn hình thức</option>
                      <option value="1">Online</option>
                      <option value="2">Offline</option>
                    </select> -->
                  <v-select
                    :items="listWorkingForm"
                    label="Chọn hình thức làm việc"
                    outlined
                    :rules="workingFormRules"
                    v-model="workingForm"
                    required
                  ></v-select>
                </div>
                <div class="col-2"></div>
                <div class="col-5">
                  <span class="label"
                    >Cấp bậc mong muốn<span class="text-danger">*</span></span
                  >
                  <v-select
                    :items="listRank"
                    label="Chọn cấp bậc mong muốn"
                    outlined
                    :rules="rankNameRules"
                    v-model="rankName"
                    required
                  ></v-select>
                  <span class="label">Mức lương<span class="text-danger">*</span></span>
                  <!-- <select name="married" id="salary" class="form-control mb-3">
                      <option value="-1">Chọn mức lương</option>
                      <option value="1">10tr</option>
                      <option value="2">20tr</option>
                    </select> -->
                  <v-select
                    :items="listSalary"
                    label="Chọn mức lương"
                    outlined
                    :rules="salaryRules"
                    v-model="salary"
                    required
                  ></v-select>
                  <span class="label">Kinh nghiệm<span class="text-danger">*</span></span>
                  <v-select
                    :items="listexp"
                    label="Chọn kinh nghiệm"
                    outlined
                    :rules="experienceRules"
                    v-model="experience"
                    required
                  ></v-select>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <span class="label">Ngành nghề<span class="text-danger">*</span></span>
                  <!-- <select name="married" id="exp" class="form-control mb-3">
                      <option value="-1">Chọn ngành nghề</option>
                      <option value="1">IT</option>
                      <option value="2">AI</option>
                    </select> -->
                  <v-select
                    :items="listMajor"
                    label="Chọn ngành nghề"
                    outlined
                    :rules="majorRules"
                    v-model="major"
                    required
                  ></v-select>
                </div>
              </div>
              <div class="row">
                <div class="d-flex col-12 justify-content-end">
                  <button class="btn btn-primary px-5">Luu</button>
                  <!-- <button class="btn btn-secondary px-3 ms-1">Khong luu</button> -->
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
export default {
  name: "EditDesiredJob",
  components: {
    SlideBar_candidate,
    Header,
    Profile_menu,
  },
  data() {
    return {
      desiredJob: "",
      desiredJobRules: [(v) => !!v || "Tên công việc mong muốn không được để trống"],
      place: "",
      placeRules: [(v) => !!v || "Tên địa điểm không được để trống"],
      workingForm: "",
      workingFormRules: [(v) => !!v || "Vui lòng chọn hình thức làm việc"],
      listWorkingForm: ["Online", "Offline"],
      rankName: "",
      rankNameRules: [(v) => !!v || "Vui lòng chọn cấp bậc mong muốn"],
      listRank: ["Mới Tốt nghiệp", "Thực tập sinh", "Trưởng phòng", "Giám đốc"],
      salary: "",
      salaryRules: [(v) => !!v || "Vui lòng chọn mức lương"],
      listSalary: [
        "5.000.000VNĐ - 10.000.000VNĐ",
        "10.000.000VNĐ - 15.000.000VNĐ",
        "15.000.000VNĐ - 20.000.000VNĐ",
        "trên 20trVNĐ",
      ],
      experience: "",
      experienceRules: [(v) => !!v || "Vui lòng chọn kinh nghiệm"],
      listexp: [
        "Chưa có kinh nghiệm",
        "0 - 1 năm",
        "1 - 2 năm",
        "2 - 5 năm",
        "5 - 10 năm",
        "trên 10 năm",
      ],
      major: "",
      majorRules: [(v) => !!v || "Vui lòng chọn ngành nghề"],
      listMajor: [
        "IT phần mềm",
        "IT phần cứng - mạng",
        "Project manager",
        "An toàn thông tin",
      ],
    };
  },
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
.col-12 {
  margin: 0;
  padding: 0;
}
.label {
  font-size: 15px;
}
</style>
