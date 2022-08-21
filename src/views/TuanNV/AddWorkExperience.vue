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
          <div class="titleheader">Kinh nghiệm làm việc</div>
          <div class="container ml-2">
            <v-form ref="form">
              <div class="row block2">
                <div class="col-12">
                  <div class="title">
                    <span class="label"
                      >Chức danh vị trí <span class="star">*</span></span
                    >
                    <div class="titleright">
                      <span>(</span><span class="star">*</span
                      ><span>)Thông tin bắt buộc</span>
                    </div>
                  </div>
                  <div>
                    <!-- <v-textarea
                      label="Nhập chức danh"
                      v-model="position"
                      outlined
                      filled
                      no-resize
                      rows="1"
                      :rules="positionRules"
                      required
                      background-color="white"
                    ></v-textarea> -->
                    <v-text-field
                      label="Nhập chức danh"
                      outlined
                      dense
                      v-model="position"
                      :rules="positionRules"
                      required
                    ></v-text-field>
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span class="label">Công ty <span class="star">*</span></span>
                  </div>
                  <div>
                    <!-- <v-textarea
                      label="Nhập tên công ty"
                      v-model="companyName"
                      outlined
                      filled
                      no-resize
                      rows="1"
                      :rules="companyNameRules"
                      required
                      background-color="white"
                    ></v-textarea> -->
                    <v-text-field
                      label="Nhập tên công ty"
                      outlined
                      dense
                      v-model="companyName"
                      :rules="companyNameRules"
                      required
                    ></v-text-field>
                  </div>
                </div>
                <div class="col-12">
                  <div class="title">
                    <span class="label">Thời gian <span class="star">*</span></span>
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
                        ></v-date-picker> </v-menu
                      ><br />
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
                    <span class="py-2 label"
                      >Mô tả công việc <span class="star">*</span></span
                    >
                  </div>
                  <v-textarea
                    v-model="description"
                    :rules="descriptionRules"
                    filled
                    label="Mô tả công việc"
                    auto-grow
                    background-color="white"
                    outlined
                    required
                  ></v-textarea>
                  <div class="row">
                    <div class="col-12 text-center">
                      <button class="btn btn-primary btnSave" @click.prevent="addWorkExp">
                        Lưu
                      </button>
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
import Header from "../ToanNT16/candidate/candidate_management/Header.vue";
import Profile_menu from "@/components/ProfileCandidate/profile_menu.vue";
import WorkExperienceService from "@/services/WorkExperienceService.js";
import Navigator from "../ToanNT16/candidate/candidate_management/Navigator.vue";
export default {
  name: "AddWorkExperience",
  components: {
    Header,
    Profile_menu,
    Navigator,
  },
  data() {
    return {
      userId: this.$route.params.userId,
      position: "",
      positionRules: [(v) => !!v || "Position must be required"],
      companyName: "",
      companyNameRules: [(v) => !!v || "Company Name must be required"],
      startDate: null,
      startDateRules: [(v) => !!v || "Start Date must be required"],
      endDate: "",
      endDateRules: [(v) => !!v || "End Date must be required"],
      description: "",
      descriptionRules: [(v) => !!v || "Description must be required"],
      // date: null,
      activePicker1: null,
      menu1: false,
      activePicker2: null,
      menu2: false,
    };
  },
  methods: {
    addWorkExp() {
      if (this.$refs.form.validate()) {
        var inputStartDate = new Date(this.startDate);
        var inputEndDate = new Date(this.endDate);
        if (inputStartDate.getTime() >= inputEndDate.getTime()) {
          this.$store.dispatch("setSnackbar", {
            color: "error",
            text: "Ngày bắt đầu phải nhỏ hơn ngày kết thúc.\n Xin hãy kiểm tra lại",
          });
        } else {
          WorkExperienceService.addWorkExp({
            companyName: this.companyName,
            position: this.position,
            description: this.description,
            startDate: this.startDate,
            endDate: this.endDate,
            userId: this.userId,
          })
            .then(() => {
              this.$store.dispatch("setSnackbar", {
                text: "Thêm thành công",
              });
              this.$router.push("/workexp");
            })
            .catch(() => {
              this.$store.dispatch("setSnackbar", {
                color: "error",
                text: "Kinh nghiệm làm việc này đã tồn tại",
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
  width: 165px;
  color: #2a3563;
  font-weight: bold;
}
.label {
  font-size: 15px;
}
.btnSave {
  padding: 5px 70px;
}
</style>
