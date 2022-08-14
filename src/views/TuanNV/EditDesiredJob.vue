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
          <div class="container">
            <v-form ref="form">
              <div class="row">
                <div class="col-5">
                  <span class="label">Công việc<span class="text-danger">*</span></span>
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

                  <span class="label">Hình thức<span class="text-danger">*</span></span>
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
                  <span class="label">Mức lương<span class="text-danger">*</span></span>
                  <v-select
                    :items="listSalary"
                    label="Chọn mức lương"
                    outlined
                    :rules="salaryRules"
                    v-model="salary"
                    required
                  ></v-select>
                </div>
              </div>
              <!-- <div>
                <multiselect
                  v-model="major"
                  tag-placeholder="Add this as new tag"
                  placeholder="Search or add a tag"
                  label="name"
                  track-by="id"
                  options="listMajor"
                  :multiple="true"
                  :taggable="true"
                  @tag="addTag"
                >
                </multiselect>
              </div> -->
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

              <div class="row" style="margin-top: 40px">
                <div class="col-12">
                  <span class="label">Ngành nghề<span class="text-danger">*</span></span>
                  <div>
                    <multiselect
                      v-model="major"
                      tag-placeholder="Chọn ngành nghề"
                      placeholder="Chọn ngành nghề"
                      :options="listMajor"
                      :multiple="true"
                      :taggable="true"
                      @tag="addTag"
                    ></multiselect>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="d-flex col-12 justify-content-end">
                  <button class="btn btn-primary px-5">Luu</button>
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
import Multiselect from "vue-multiselect";
import ProvinceDistrictService from "@/services/ProvinceDistrictService";
export default {
  name: "EditDesiredJob",
  components: {
    SlideBar_candidate,
    Header,
    Profile_menu,
    Multiselect,
  },
  data() {
    return {
      desiredJob: "",
      desiredJobRules: [(v) => !!v || "Tên công việc mong muốn không được để trống"],
      place: [],
      placeRules: [(v) => !!v || "Tên địa điểm không được để trống"],
      listPlace: [
        // "Thành phố Hà Nội",
        // "Tỉnh Hà Giang",
        // "Tỉnh Tuyên Quang",
        // "Tỉnh Điện Biên",
      ],
      // listPlace: [
      //   { id: 1, name: "Thành phố Hà Nội" },
      //   { id: 2, name: "Tỉnh Hà Giang" },
      //   { id: 3, name: "Tỉnh Cao Bằng" },
      //   { id: 4, name: "Tỉnh Bắc Kạn" },
      //   { id: 5, name: "Tỉnh Tuyên Quang" },
      //   { id: 6, name: "Tỉnh Lào Cai" },
      //   { id: 7, name: "Tỉnh Điện Biên" },
      //   { id: 8, name: "Tỉnh Lai Châu" },
      //   { id: 9, name: "Tỉnh Sơn La" },
      //   { id: 10, name: "Tỉnh Yên Bái" },
      //   { id: 11, name: "Tỉnh Hoà Bình" },
      //   { id: 12, name: "Tỉnh Thái Nguyên" },
      //   { id: 13, name: "Tỉnh Lạng Sơn" },
      //   { id: 14, name: "Tỉnh Quảng Ninh" },
      //   { id: 15, name: "Tỉnh Bắc Giang" },
      //   { id: 16, name: "Tỉnh Phú Thọ" },
      //   { id: 17, name: "Tỉnh Vĩnh Phúc" },
      //   { id: 18, name: "Tỉnh Bắc Ninh" },
      //   { id: 19, name: "Tỉnh Hải Dương" },
      //   { id: 20, name: "Thành phố Hải Phòng" },
      //   { id: 21, name: "Tỉnh Hưng Yên" },
      //   { id: 22, name: "Tỉnh Thái Bình" },
      //   { id: 23, name: "Tỉnh Hà Nam" },
      //   { id: 24, name: "Tỉnh Nam Định" },
      //   { id: 25, name: "Tỉnh Ninh Bình" },
      //   { id: 26, name: "Tỉnh Thanh Hóa" },
      //   { id: 27, name: "Tỉnh Nghệ An" },
      //   { id: 28, name: "Tỉnh Hà Tĩnh" },
      //   { id: 29, name: "Tỉnh Quảng Bình" },
      //   { id: 30, name: "Tỉnh Quảng Trị" },
      //   { id: 31, name: "Tỉnh Thừa Thiên Huế" },
      //   { id: 32, name: "Thành phố Đà Nẵng" },
      //   { id: 33, name: "Tỉnh Quảng Nam" },
      //   { id: 34, name: "Tỉnh Quảng Ngãi" },
      //   { id: 35, name: "Tỉnh Bình Định" },
      //   { id: 36, name: "Tỉnh Phú Yên" },
      //   { id: 37, name: "Tỉnh Khánh Hòa" },
      //   { id: 38, name: "Tỉnh Ninh Thuận" },
      //   { id: 39, name: "Tỉnh Bình Thuận" },
      //   { id: 40, name: "Tỉnh Kon Tum" },
      //   { id: 41, name: "Tỉnh Gia Lai" },
      //   { id: 42, name: "Tỉnh Đắk Lắk" },
      //   { id: 43, name: "Tỉnh Đắk Nông" },
      //   { id: 44, name: "Tỉnh Lâm Đồng" },
      //   { id: 45, name: "Tỉnh Bình Phước" },
      //   { id: 46, name: "Tỉnh Tây Ninh" },
      //   { id: 47, name: "Tỉnh Bình Dương" },
      //   { id: 48, name: "Tỉnh Đồng Nai" },
      //   { id: 49, name: "Tỉnh Bà Rịa - Vũng Tàu" },
      //   { id: 50, name: "Thành phố Hồ Chí Minh" },
      //   { id: 51, name: "Tỉnh Long An" },
      //   { id: 52, name: "Tỉnh Tiền Giang" },
      //   { id: 53, name: "Tỉnh Bến Tre" },
      //   { id: 54, name: "Tỉnh Trà Vinh" },
      //   { id: 55, name: "Tỉnh Vĩnh Long" },
      //   { id: 56, name: "Tỉnh Đồng Tháp" },
      //   { id: 57, name: "Tỉnh An Giang" },
      //   { id: 58, name: "Tỉnh Kiên Giang" },
      //   { id: 59, name: "Thành phố Cần Thơ" },
      //   { id: 60, name: "Tỉnh Hậu Giang" },
      //   { id: 61, name: "Tỉnh Sóc Trăng" },
      //   { id: 62, name: "Tỉnh Bạc Liêu" },
      //   { id: 63, name: "Tỉnh Cà Mau" },
      // ],
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
        // "Chưa có kinh nghiệm",
        // "0 - 1 năm",
        // "1 - 2 năm",
        // "2 - 5 năm",
        // "5 - 10 năm",
        // "trên 10 năm",
      ],
      major: [],
      majorRules: [(v) => !!v || "Vui lòng chọn ngành nghề"],
      listMajor: [
        "IT phần mềm",
        "IT phần cứng - mạng",
        "Project manager",
        "An toàn thông tin",
      ],

      // value: [
      //   { name: 'Javascript', code: 'js' }
      // ],
      // options: [
      //   { name: 'Vue.js', code: 'vu' },
      //   { name: 'Javascript', code: 'js' },
      //   { name: 'Open Source', code: 'os' }
      // ]
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
    getProvince() {
      ProvinceDistrictService.getAllProvince().then((rs) => {
        this.listPlace = rs.data;
      });
    },
  },
  created() {
    this.getProvince();
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
