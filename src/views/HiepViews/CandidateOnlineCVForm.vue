<template>
  <v-app>
    <div>
      <HeaderComponent />
      <h2 class="text-center mt-3">Hồ sơ ứng viên</h2>
      <v-form ref="form" v-model="valid" lazy-validation>
        <div class="row mt-5">
          <div class="col-3"></div>
          <div class="col-3 left-form">
            <span>Ngày sinh <span style="color: red">*</span></span
            ><br />
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Birthdate"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">
                  OK
                </v-btn>
              </v-date-picker> </v-menu
            ><br />
            <span>Giới tính <span style="color: red">*</span></span
            ><br />
            <v-select :items="gender" label="Chọn giới tính" required></v-select
            ><br />
            <span>Tình trạng hôn nhân <span style="color: red">*</span></span
            ><br />
            <v-select
              :items="maritalStatus"
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
              label="Chọn mức lương mong muốn"
              required
            ></v-select
            ><br />
            <span>Hình thức làm việc <span style="color: red">*</span></span
            ><br />
            <v-select
              :items="workingForm"
              label="Chọn hình thức làm việc"
              required
            ></v-select
            ><br />
            <span>Mục tiêu nghề nghiệp</span
            ><br />
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
            <span>Kỹ năng bản thân</span
            ><br />
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
            >Bằng việc nhấn nút đăng ký, bạn đã đồng ý thỏa thuẩn sử dụng của
            Timviec365.vn</span
          >
          <button type="submit" class="btn mt-5 mb-5 btn-regist">
            Đăng ký
          </button>
        </div>
      </v-form>
    </div>
  </v-app>
</template>

<script>
import HeaderComponent from "@/components/HiepComponents/HeaderComponent.vue";
export default {
  name: "CandidateOnlineCVForm",
  components: {
    HeaderComponent,
  },
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
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
    workingForm: ["Onsite", "Remote"],
    careerGoals: "",
    personalSkills: "",
  }),
  methods: {
    submit() {
      // this.validate();
      this.$router.push("/candidateLogin");
    },
    validate() {
      this.$refs.form.validate();
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