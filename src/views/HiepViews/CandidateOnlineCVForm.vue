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
            <v-select :items="rating" label="Chọn xếp loại" required></v-select
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
            ></v-select
            ><br />
            <span>Mục tiêu nghề nghiệp</span><br />
            <span style="font-style: italic" class="ml-5"
              >Mô tả mục tiêu nghề nghiệp ( nếu có ) :</span
            ><br />
            <v-textarea
              outlined
              name="careerGoals"
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
              name="personalSkills"
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
  data: () => ({
    // candidateId: this.$route.params.id,
    date: null,
    activePicker: null,
    menu: false,
    gender: ["Nam", "Nữ"],
    maritalStatus: ["Độc thân", "Đã có gia đình"],
    university: "",
    universityRules: [
      (v) => !!v || "University is required",
      (v) => (v && v.length > 5) || "University must be more than 5 characters",
    ],
    rating: [],
    experience: [],
    salary: [],
    workingForm: [],
    careerGoals: "",
    personalSkills: "",
    
    selectedGender: "",
    selectedMaritalStatus: "",
    selectedExperience: "",
    selectedSalary: "",
    selectedWorkingForm: "",
  }),
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    submit() {
      // if (this.$refs.form.validate()) {
      //   this.$router.push("/candidateLogin");
      // }
    },
    getCombobox() {
      CandidateRegisterService.getCombobox().then((rs) => {
        this.experience = rs.data.yearOfExperience.map((result) => result.name);
        this.workingForm = rs.data.workingForm.map((result) => result.name);
      });
    },
  },
  created() {
    this.getCombobox();
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