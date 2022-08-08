<template>
  <div class="d-flex">
    <RecruiterNavigator class="w-25" />
    <div class="w-75">
      <Header style="height: 250px" />
      <div class="posting">
        <h3
          style="
            color: #4c5bd4;
            border-left: 7px solid #4c5bd4;
            padding-left: 10px;
          "
        >
          Thông tin đăng tuyển
        </h3>
        <v-form ref="form" lazy-validation>
          <span>Vị trí đăng tuyển <span style="color: red">*</span></span
          ><br />
          <v-text-field
            class="mt-5"
            label="Vị trí đăng tuyển"
            outlined
            dense
            v-model="position"
            :rules="positionRules"
            required
          ></v-text-field>
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
          ></v-select>
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
          ></v-select>
          <span>Số lượng cần tuyển <span style="color: red">*</span></span
          ><br />
          <v-text-field
            class="mt-5"
            label="Số lượng cần tuyển"
            outlined
            dense
            v-model="quantity"
            :rules="quantityRules"
            required
          ></v-text-field>
          <h3
            style="
              color: #4c5bd4;
              border-left: 7px solid #4c5bd4;
              padding-left: 10px;
            "
          >
            Mô tả công việc
          </h3>
          <span>Mô tả công việc <span style="color: red">*</span></span
          ><br />
          <v-textarea
            outlined
            label="Mô tả công việc"
            v-model="description"
            :rules="descriptionRules"
          ></v-textarea>
          <h3
            style="
              color: #4c5bd4;
              border-left: 7px solid #4c5bd4;
              padding-left: 10px;
            "
          >
            Yêu cầu công việc
          </h3>
          <span>Yêu cầu bằng cấp<span style="color: red">*</span></span
          ><br />
          <v-select
            :items="degreeRequired"
            v-model="selectedDegreeRequired"
            @change="
              (e) => {
                this.selectedDegreeRequired = e;
              }
            "
            label="Chọn yêu cầu bằng cấp"
            required
            :rules="degreeRequiredRules"
          ></v-select>
          <span>Yêu cầu giới tính<span style="color: red">*</span></span
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
          ></v-select>
          <h3
            style="
              color: #4c5bd4;
              border-left: 7px solid #4c5bd4;
              padding-left: 10px;
            "
          >
            Quyền lợi được hưởng
          </h3>
          <span>Quyền lợi được hưởng <span style="color: red">*</span></span
          ><br />
          <v-textarea
            outlined
            label="Quyền lợi được hưởng"
            v-model="benefits"
            :rules="benefitsRules"
          ></v-textarea>
          <h3
            style="
              color: #4c5bd4;
              border-left: 7px solid #4c5bd4;
              padding-left: 10px;
            "
          >
            Yêu cầu hồ sơ
          </h3>
          <span>Hồ sơ bao gồm<span style="color: red">*</span></span
          ><br />
          <v-textarea
            outlined
            label="Hồ sơ bao gồm"
            v-model="files"
            :rules="filesRules"
          ></v-textarea>
          <span>Hạn nộp hồ sơ<span style="color: red">*</span></span
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
                label="Hạn nộp hồ sơ"
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
        </v-form>
      </div>
      <div class="text-center">
        <button class="btn btn-primary active w-25" @click="addPosting">
          Đăng tin
        </button>
        <button class="btn btn-light w-25" @click="cancelAddPosting">
          Hủy tạo tin
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/views/ToanNT16/candidate/candidate_management/Header.vue";
import RecruiterNavigator from "@/components/HiepComponents/RecruiterNavigator.vue";
import RecruiterManagementService from "@/services/RecruiterManagementService.js";
export default {
  name: "RecruiterAddNewPosting",
  components: { Header, RecruiterNavigator },
  data() {
    return {
      position: "",
      positionRules: [
        (v) => !!v || "position is required",
        (v) => (v && v.length > 5) || "position must be more than 5 characters",
      ],
      degreeRequired: ["Không yêu cầu", "Cao đẳng trở lên", "Đại học trở lên"],
      selectedDegreeRequired: "",
      degreeRequiredRules: [(v) => !!v || "degreeRequiredRules is required"],
      workingForm: ["Onsite", "Remote"],
      selectedWorkingForm: "",
      workingFormRules: [(v) => !!v || "workingForm is required"],
      salary: [
        "3-5 triệu",
        "5-7 triệu",
        "7-10 triệu",
        "10-15 triệu",
        "15-20 triệu",
      ],
      selectedSalary: "",
      salaryRules: [(v) => !!v || "salary is required"],
      quantity: "",
      quantityRules: [
        (v) => !!v || "Quantity is required",
        (v) => (v && !isNaN(v)) || "Quantity must be a number",
      ],
      description: "",
      descriptionRules: [
        (v) => !!v || "description is required",
        (v) =>
          (v && v.length > 5) || "description must be more than 5 characters",
      ],
      gender: ["Nam", "Nữ"],
      selectedGender: "",
      genderRules: [(v) => !!v || "gender is required"],
      benefits: "",
      benefitsRules: [
        (v) => !!v || "benefits is required",
        (v) => (v && v.length > 5) || "benefits must be more than 5 characters",
      ],
      date: null,
      activePicker: null,
      menu: false,
      dateRules: [(v) => !!v || "date is required"],
      files: "",
      filesRules: [
        (v) => !!v || "files is required",
        (v) => (v && v.length > 5) || "files must be more than 5 characters",
      ],
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    save(date) {
      this.$refs.menu.save(date);
    },
    cancelAddPosting() {
      this.$router.push("/recruiterManagement");
    },
    addPosting() {
      if (this.$refs.form.validate()) {
        const theLoggedUser = JSON.parse(window.localStorage.getItem("user"));

        RecruiterManagementService.addPosting({
          email: theLoggedUser.user.email,
          position: this.position,
          workingForm: 1,
          salary: 1,
          quantity: this.quantity,
          degreeRequired: this.selectedDegreeRequired,
          genderRequirement: this.selectedGender,
          benefits: this.benefits,
          files: this.files,
          deadlineForSubmission: this.date,
        })
          .then(() => {
            this.$store.dispatch("setSnackbar", {
              text: "Thêm công việc thành công",
            });
            this.$router.push("/recruiterManagement");
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
.posting {
  width: 60%;
  margin: 0 auto;
}
</style>