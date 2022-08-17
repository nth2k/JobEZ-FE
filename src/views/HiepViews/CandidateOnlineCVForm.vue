<template>
  <v-app>
    <div>
      <HeaderComponent />
      <h2 class="text-center mt-3">Hồ sơ ứng viên</h2>
      <v-form ref="form">
        <div class="row mt-5">
          <div class="col-3"></div>
          <div class="col-3 left-form">
            <span>Ngày sinh <span style="color: red">*</span></span
            ><br />
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Ngày sinh"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  required
                  :rules="dateRules"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                :active-picker.sync="activePicker"
                :max="
                  new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                    .toISOString()
                    .substr(0, 10)
                "
                min="1950-01-01"
                @change="save"
              ></v-date-picker> </v-menu
            ><br />
            <span>Giới tính <span style="color: red">*</span></span
            ><br />
            <v-select
              :items="gender"
              v-model="selectedGender"
              @change="
                (e) => {
                  this.selectedGender = e;
                }
              "
              label="Chọn giới tính"
              required
              :rules="genderRules"
            ></v-select
            ><br />
            <span>Tình trạng hôn nhân <span style="color: red">*</span></span
            ><br />
            <v-select
              :items="maritalStatus"
              v-model="selectedMaritalStatus"
              @change="
                (e) => {
                  this.selectedMaritalStatus = e;
                }
              "
              label="Chọn tình trạng hôn nhân"
              required
              :rules="maritalStatusRules"
            ></v-select
            ><br />
            <span>Tên trường học <span style="color: red">*</span></span
            ><br />
            <v-text-field
              class="mt-5"
              label="Nhập tên trường đại học/cao đẳng"
              outlined
              dense
              v-model="university"
              :rules="universityRules"
              required
            ></v-text-field
            ><br />
            <span>Xếp loại <span style="color: red">*</span></span
            ><br />
            <v-select
              :items="rating"
              v-model="selectedRating"
              @change="
                (e) => {
                  this.selectedRating = e;
                }
              "
              label="Chọn xếp loại"
              required
              :rules="ratingRules"
            ></v-select
            ><br />
            <span>Số năm kinh nghiệm <span style="color: red">*</span></span
            ><br />
            <v-select
              :items="experience"
              v-model="selectedExperience"
              @change="
                (e) => {
                  this.selectedExperience = e;
                }
              "
              label="Chọn số năm kinh nghiệm"
              required
              :rules="experienceRules"
            ></v-select
            ><br />
          </div>
          <div class="col-3 right-form">
            <span>Mức lương <span style="color: red">*</span></span
            ><br />
            <v-select
              :items="salary"
              v-model="selectedSalary"
              @change="
                (e) => {
                  this.selectedSalary = e;
                }
              "
              label="Chọn mức lương mong muốn"
              required
              :rules="salaryRules"
            ></v-select
            ><br />
            <span>Hình thức làm việc <span style="color: red">*</span></span
            ><br />
            <v-select
              :items="workingForm"
              v-model="selectedWorkingForm"
              @change="
                (e) => {
                  this.selectedWorkingForm = e;
                }
              "
              label="Chọn hình thức làm việc"
              required
              :rules="workingFormRules"
            ></v-select
            ><br />
            <span>Mục tiêu nghề nghiệp</span><br />
            <span style="font-style: italic" class="ml-5"
              >Mô tả mục tiêu nghề nghiệp ( nếu có ) :</span
            ><br />
            <v-textarea
              outlined
              label="Mục tiêu nghề nghiệp"
              v-model="careerGoals"
            ></v-textarea
            ><br />
            <span>Kỹ năng bản thân</span><br />
            <span style="font-style: italic" class="ml-5"
              >Mô tả kỹ năng bản thân ( nếu có ) :</span
            ><br />
            <v-textarea
              outlined
              label="Kỹ năng bản thân"
              v-model="personalSkills"
            ></v-textarea
            ><br />
          </div>
          <div class="col-1"></div>
          <span class="mt-5 w-100 text-center"
            >Bằng việc nhấn nút đăng ký, bạn đã đồng ý thỏa thuận sử dụng của
            JobEz</span
          >
        </div>
      </v-form>
      <button @click="submit" class="btn mt-5 mb-5 btn-regist">Đăng ký</button>
    </div>
  </v-app>
</template>

<script>
import HeaderComponent from "@/components/HiepComponents/HeaderComponent.vue";
import CandidateRegisterService from "@/services/CandidateRegisterService.js";
export default {
  name: "CandidateOnlineCVForm",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      candidateId: this.$route.params.id,
      date: null,
      activePicker: null,
      menu: false,
      dateRules: [(v) => !!v || "Ngày sinh bắt buộc"],
      gender: ["Nam", "Nữ"],
      genderRules: [(v) => !!v || "Giới tính bắt buộc"],
      maritalStatus: ["Độc thân", "Đã có gia đình"],
      maritalStatusRules: [(v) => !!v || "Tình trạng hôn nhân bắt buộc"],
      university: "",
      universityRules: [
        (v) => !!v || "Đại học bắt buộc",
        (v) =>
          (v && v.length > 5) || "Đại học phải lớn hơn 5 kí tự",
      ],
      rating: ["Giỏi", "Khá", "Trung Bình", "Chưa ra trường"],
      ratingRules: [(v) => !!v || "Xếp loại bắt buộc"],
      experience: ["Chưa có kinh nghiệm", "0 - 1 năm kinh nghiệm", "Hơn 1 năm kinh nghiệm", "Hơn 2 năm kinh nghiệm", "Hơn 5 năm kinh nghiệm", "Hơn 10 năm kinh nghiệm"],
      experienceRules: [(v) => !!v || "Kinh nghiệm bắt buộc"],
      salary: ["3-5 triệu", "5-7 triệu", "7-10 triệu", "10-15 triệu", "15-20 triệu"],
      salaryRules: [(v) => !!v || "Lương mong muốn bắt buộc"],
      workingForm: ["Toàn thời gian cố định", "Toàn thời gian tạm thời", "Bán thời gian", "Bán thời gian tạm thời", "Hợp đồng", "Việc làm từ xa"],
      workingFormRules: [(v) => !!v || "Hình thức làm việc bắt buộc"],
      careerGoals: "",
      personalSkills: "",

      selectedGender: "",
      selectedMaritalStatus: "",
      selectedRating: "",
      selectedExperience: "",
      selectedSalary: "",
      selectedWorkingForm: "",
    };
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    submit() {
      if (this.$refs.form.validate()) {
        CandidateRegisterService.updateCandidate(this.candidateId, {
          birthDate: this.date,
          gender: this.selectedGender,
          mariaStatus: this.selectedMaritalStatus,
          university: this.university,
          rating: this.selectedRating,
          experience: this.selectedExperience,
          workingForm: this.selectedWorkingForm,
          careerGoals: this.careerGoals,
          description: this.personalSkills,
        })
          .then(() => {
            this.$store.dispatch("setSnackbar", {
              text: "Đăng kí ứng viên bước 2 thành công",
            });
            this.$router.push("/candidateLogin");
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
.left-form input {
  width: 80%;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.left-form select {
  width: 80%;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.right-form input {
  margin-top: 20px;
  width: 15px;
  height: 15px;
  margin-right: 20px;
}

.btn-regist {
  display: block;
  margin: 0 auto;
  background-color: #4c5bd4;
  color: white;
  width: 319px;
  height: 46px;
  border-radius: 25px;
}

textarea {
  border: 1px solid black;
}
</style>