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
          <div class="titleheader">Học vấn - Bằng cấp</div>
          <div class="container ml-3">
            <v-form rel="form">
              <div class="row block2">
                <div class="col-12">
                  <div class="title">
                    <span class="label"
                      >Bằng cấp chứng chỉ <span class="star">*</span></span
                    >
                    <div class="titleright">
                      <span>(</span><span class="star">*</span
                      ><span>)Thông tin bắt buộc</span>
                    </div>
                  </div>
                  <div class="col-12">
                    <!-- <input
                      class="form-control"
                      type="text"
                      id="bangcap"
                      placeholder="Nhập bằng cấp chứng chỉ"
                    /> -->
                    <v-textarea
                      label="Nhập bằng cấp chứng chỉ"
                      v-model="degree"
                      outlined
                      filled
                      no-resize
                      rows="1"
                      :rules="degreeRules"
                      required
                      background-color="white"
                    ></v-textarea>
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span>Nhập trường / đơn vị dạy <span class="star">*</span></span>
                  </div>
                  <div>
                    <!-- <input
                      class="form-control"
                      type="text"
                      id="donvigiangday"
                      placeholder="Nhập tên trường / đơn vị giảng dạy"
                    /> -->
                    <v-textarea
                      label="Nhập tên trường / đơn vị giảng dạy"
                      v-model="teachingUnit"
                      outlined
                      filled
                      no-resize
                      rows="1"
                      :rules="teachingUnitRules"
                      required
                      background-color="white"
                    ></v-textarea>
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span>Thời gian (dd/mm/yyy) <span class="star">*</span></span>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div class="col-5" style="padding-left: 0; padding-right: 0">
                      <v-textarea
                        label="Ngày bắt đầu"
                        v-model="startDate"
                        outlined
                        filled
                        no-resize
                        rows="1"
                        :rules="startDateRules"
                        required
                        background-color="white"
                      ></v-textarea>
                    </div>
                    <div class="col-5" style="padding-left: 0; padding-right: 0">
                      <v-textarea
                        label="Ngày kết thúc"
                        v-model="endDate"
                        outlined
                        filled
                        no-resize
                        rows="1"
                        :rules="endDateRules"
                        required
                        background-color="white"
                      ></v-textarea>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span>Chuyền ngành <span class="star">*</span></span>
                  </div>
                  <div>
                    <!-- <input
                      class="form-control"
                      type="text"
                      id="tenchuyennganh"
                      placeholder="Nhập tên chuyên ngành"
                    /> -->
                    <v-textarea
                      label="Nhập tên chuyên ngành"
                      v-model="majorName"
                      outlined
                      filled
                      no-resize
                      rows="1"
                      :rules="majorNameRules"
                      required
                      background-color="white"
                    ></v-textarea>
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span>Xếp loại <span class="star">*</span></span>
                  </div>
                  <div>
                    <!-- <label for="married">Xếp loại <span class="text-danger">*</span></label> -->
                    <!-- <select name="married" id="married" class="form-control">
                      <option value="-1">Chọn xếp loại</option>
                      <option value="S">S</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                    </select> -->
                    <v-select
                      :items="ranks"
                      label="Chọn xếp loại"
                      outlined
                      :rules="rankNameRules"
                      v-model="rankName"
                      required
                    ></v-select>
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span class="py-2"
                      >Thông tin bổ sung <span class="star">*</span></span
                    >
                  </div>
                  <div class="form-group shadow-textarea">
                    <!-- <textarea
                      class="form-control z-depth-1"
                      rows="5"
                      placeholder="Bổ sung các thông tin của bạn"
                    ></textarea> -->
                    <v-textarea
                      v-model="description"
                      :rules="descriptionRules"
                      filled
                      label="Bổ sung các thông tin của bạn"
                      auto-grow
                      background-color="white"
                      outlined
                      required
                    ></v-textarea>
                  </div>
                  <div class="text-center container">
                    <button
                      class="btn btn-primary btnSave px-5"
                      @click.prevent="addCertificate"
                    >
                      Lưu
                    </button>
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
import DegreeService from "@/services/DegreeService";
export default {
  name: "AddDegree",
  components: {
    SlideBar_candidate,
    Header,
    Profile_menu,
  },
  data() {
    return {
      degree: "",
      degreeRules: [(v) => !!v || "Tên bằng cấp không được để trống"],
      teachingUnit: "",
      teachingUnitRules: [(v) => !!v || "Tên đơn vị giảng dạy không được để trống"],
      startDate: "",
      startDateRules: [
        (v) => !!v || "Ngày bắt đầu không được để trống",
        (v) =>
          /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/.test(v) ||
          "Ngày bắt đầu không hợp lệ (dd/MM/yyyy)",
      ],
      endDate: "",
      endDateRules: [
        (v) => !!v || "Ngày kết thúc không được để trống",
        (v) =>
          /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/.test(v) ||
          "Ngày kết thúc không hợp lệ (dd/MM/yyyy)",
      ],
      majorName: "",
      majorNameRules: [(v) => !!v || "Tên chuyên ngành không được để trống"],
      rankName: "",
      rankNameRules: [(v) => !!v || "Vui lòng chọn xếp loại"],
      ranks: ["Giỏi", "Khá", "Trung bình", "Yếu"],
      description: "",
      descriptionRules: [(v) => !!v || "Thông tin bổ sung không được để trống"],
      userId: this.$route.params.userId,
    };
  },
  methods: {
    addCertificate() {
      if (this.$refs.form.validate()) {
        var inputStartDate = new Date(this.startDate);
        var inputEndDate = new Date(this.endDate);
        if (inputStartDate.getTime() >= inputEndDate.getTime()) {
          this.$store.dispatch("setSnackbar", {
            color: "error",
            text: "Ngày bắt đầu không thể nhỏ hơn ngày kết thúc.\n Xin hãy kiểm tra lại",
          });
        } else {
          var [day, month, year] = this.startDate.split("/");
          this.startDate = [year, month, day].join("-");
          [day, month, year] = this.endDate.split("/");
          this.endDate = [year, month, day].join("-");
          DegreeService.addCertificate({
            certificateName: this.degree,
            teachingUnit: this.teachingUnit,
            startTime: this.startDate,
            endTime: this.endDate,
            major: this.majorName,
            rank: this.rankName,
            supplementaryInformation: this.description,
            userId: this.userId,
          })
            .then(() => {
              this.$store.dispatch("setSnackbar", {
                text: "Thêm thành công",
              });
              this.$router.push("/degree");
            })
            .catch(() => {
              this.$store.dispatch("setSnackbar", {
                color: "error",
                text: "Có lỗi xảy ra! Vui lòng thử lại",
              });
            });
        }
      }
    },
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
  width: 167px;
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
