<template>
  <div id="app" class="row">
    <div class="col-sm-2" id="slide_bar">
      <Navigator />
    </div>
    <div class="col-sm-10">
      <Header />
      <div class="body mx-2 pl-2 py-2 d-flex mt-4 row">
        <div class="leftHoso">
          <Profile_menu />
        </div>
        <div class="blockright col-9">
          <div class="titleRight">Học vấn - Bằng cấp</div>
          <div class="container ml-3">
            <v-form ref="form">
              <div class="row">
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
                    <!-- <v-textarea
                      label="Nhập bằng cấp chứng chỉ"
                      v-model="degree"
                      outlined
                      filled
                      no-resize
                      rows="1"
                      :rules="degreeRules"
                      required
                      background-color="white"
                    ></v-textarea> -->
                    <v-text-field
                      label="Nhập bằng cấp chứng chỉ"
                      outlined
                      dense
                      v-model="degree"
                      :rules="degreeRules"
                      required
                    ></v-text-field>
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span class="label"
                      >Nhập trường / đơn vị dạy <span class="star">*</span></span
                    >
                  </div>
                  <div>
                    <v-text-field
                      label="Nhập tên trường / đơn vị giảng dạy"
                      outlined
                      dense
                      v-model="teachingUnit"
                      :rules="teachingUnitRules"
                      required
                    ></v-text-field>
                    <!-- <v-textarea
                      label="Nhập tên trường / đơn vị giảng dạy"
                      v-model="teachingUnit"
                      outlined
                      filled
                      no-resize
                      rows="1"
                      :rules="teachingUnitRules"
                      required
                      background-color="white"
                    ></v-textarea> -->
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span class="label"
                      >Thời gian (dd/mm/yyy) <span class="star">*</span></span
                    >
                  </div>
                  <div class="d-flex justify-content-between">
                    <div class="col-5" style="padding-left: 0; padding-right: 0">
                      <v-menu
                        ref="menu"
                        v-model="menu1"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="startDate"
                            label="Ngày bắt đầu"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            required
                            :rules="startDateRules"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="startDate"
                          :active-picker.sync="activePicker1"
                          :max="
                            new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                              .toISOString()
                              .substr(0, 10)
                          "
                          min="1950-01-01"
                        ></v-date-picker>
                      </v-menu>
                    </div>
                    <div class="col-5" style="padding-left: 0; padding-right: 0">
                      <v-menu
                        ref="menu"
                        v-model="menu2"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="endDate"
                            label="Ngày kết thúc"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            required
                            :rules="endDateRules"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="endDate"
                          :active-picker.sync="activePicker2"
                          :max="
                            new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                              .toISOString()
                              .substr(0, 10)
                          "
                          min="1950-01-01"
                        ></v-date-picker>
                      </v-menu>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span class="label">Chuyền ngành <span class="star">*</span></span>
                  </div>
                  <div>
                    <!-- <v-textarea
                      label="Nhập tên chuyên ngành"
                      v-model="majorName"
                      outlined
                      filled
                      no-resize
                      rows="1"
                      :rules="majorNameRules"
                      required
                      background-color="white"
                    ></v-textarea> -->
                    <v-text-field
                      label="Nhập tên chuyên ngành"
                      outlined
                      dense
                      v-model="majorName"
                      :rules="majorNameRules"
                      required
                    ></v-text-field>
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span class="label">Xếp loại <span class="star">*</span></span>
                  </div>
                  <div>
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
                    <span class="py-2 label"
                      >Thông tin bổ sung <span class="star">*</span></span
                    >
                  </div>
                  <div class="form-group shadow-textarea">
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
                      @click.prevent="addDegree"
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
import Header from "../ToanNT16/candidate/candidate_management/Header.vue";
import Profile_menu from "@/components/ProfileCandidate/profile_menu.vue";
import DegreeService from "@/services/DegreeService.js";
import Navigator from "../ToanNT16/candidate/candidate_management/Navigator.vue";
export default {
  name: "AddDegree",
  components: {
    Header,
    Profile_menu,
    Navigator,
  },
  data() {
    return {
      degree: "",
      degreeRules: [(v) => !!v || "Tên bằng cấp không được để trống"],
      teachingUnit: "",
      teachingUnitRules: [(v) => !!v || "Tên đơn vị giảng dạy không được để trống"],
      startDate: "",
      startDateRules: [(v) => !!v || "Ngày bắt đầu không được để trống"],
      endDate: "",
      endDateRules: [(v) => !!v || "Ngày kết thúc không được để trống"],
      majorName: "",
      majorNameRules: [(v) => !!v || "Tên chuyên ngành không được để trống"],
      rankName: "",
      rankNameRules: [(v) => !!v || "Vui lòng chọn xếp loại"],
      ranks: ["Giỏi", "Khá", "Trung bình", "Yếu"],
      description: "",
      descriptionRules: [(v) => !!v || "Thông tin bổ sung không được để trống"],
      userId: this.$route.params.userId,
      activePicker1: null,
      menu1: false,
      activePicker2: null,
      menu2: false,
    };
  },
  methods: {
    addDegree() {
      if (this.$refs.form.validate()) {
        var inputStartDate = new Date(this.startDate);
        var inputEndDate = new Date(this.endDate);
        if (inputStartDate.getTime() >= inputEndDate.getTime()) {
          this.$store.dispatch("setSnackbar", {
            color: "error",
            text: "Ngày bắt đầu phải nhỏ hơn ngày kết thúc.\n Xin hãy kiểm tra lại",
          });
        } else {
          DegreeService.addDegree({
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
                text: "Bằng cấp đã tồn tại",
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
.titleheader {
  margin-left: 0.5rem;
  margin-bottom: 20px;
  border-bottom: 1px solid gray;
  width: 183px;
  color: #2a3563;
  font-size: 20px;
  font-weight: bold;
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
.blockright {
  border-left: 1px solid gray;
}
.titleRight {
  margin-bottom: 20px;
  margin-left: 14px;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
  width: 150px;
  color: #2a3563;
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
