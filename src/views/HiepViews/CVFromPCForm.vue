<template>
  <v-app>
    <div>
      <HeaderComponent />
      <h2 class="text-center mt-5 mb-5">Hồ sơ ứng viên</h2>
      <v-form ref="form">
        <div class="row">
          <div class="col-3"></div>
          <div class="col-3 left-form">
            <span>Ngày sinh<span style="color: red">*</span></span
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
            <span>Số năm kinh nghiệm<span style="color: red">*</span></span
            ><br />
            <v-col cols="12" sm="12">
              <v-select
                :items="experience"
                label="Chọn năm kinh nghiệm"
                required
                :rules="experienceRules"
              ></v-select> </v-col
            ><br />
          </div>
          <div class="col-3 right-form">
            <span>Đại học<span style="color: red">*</span></span
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
            <span>Xếp loại<span style="color: red">*</span></span
            ><br />
            <v-col cols="12" sm="12">
              <v-select
                :items="rating"
                label="Chọn xếp loại"
                required
                v-model="selectedRating"
                :rules="ratingRules"
              ></v-select> </v-col
            ><br />
          </div>
          <div class="col-3"></div>
          <div class="file-cv">
            <v-file-input v-model="image" label="CV ứng viên"></v-file-input>
          </div>
          <span class="mt-5 mb-5 w-100 text-center"
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
  name: "CVFromPCForm",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      candidateId: this.$route.params.id,
      date: null,
      activePicker: null,
      menu: false,
      dateRules: [(v) => !!v || "Date bắt buộc"],
      university: "",
      universityRules: [
        (v) => !!v || "University bắt buộc",
        (v) =>
          (v && v.length > 5) || "University phải hơn 5 kí tự",
      ],
      rating: ["Giỏi", "Khá", "Trung Bình", "Chưa ra trường"],
      ratingRules: [(v) => !!v || "Rating bắt buộc"],
      experience: ["Chưa có kinh nghiệm", "0 - 1 năm kinh nghiệm", "Hơn 1 năm kinh nghiệm", "Hơn 2 năm kinh nghiệm", "Hơn 5 năm kinh nghiệm", "Hơn 10 năm kinh nghiệm"],
      experienceRules: [(v) => !!v || "Experience bắt buộc"],

      selectedRating: "",
      image: null,
      base64: null,
    };
  },
  watch: {
    image: function (newVal) {
      if (newVal) {
        this.createBase64Image(newVal);
      } else {
        this.base64 = null;
      }
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    createBase64Image: function (FileObject) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.base64 = event.target.result;
      };
      reader.readAsDataURL(FileObject);
    },
    submit() {
      if (this.$refs.form.validate()) {
        CandidateRegisterService.updateCandidate2(this.candidateId, {
          birthDate: this.date,
          university: this.university,
          rating: this.selectedRating,
          experience: this.selectedExperience,
          candidateCV: this.base64,
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
    // getCombobox() {
    //   CandidateRegisterService.getCombobox().then((rs) => {
    //     this.experience = rs.data.yearOfExperience.map((result) => result.name);
    //   });
    // },
  },
  created() {
    // this.getCombobox();
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

.right-form select {
  width: 80%;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.file-cv {
  width: 351px;
  height: 196px;
  margin-left: 38%;
  margin-right: 38%;
  margin-top: 20px;
  padding: 70px;
  background: #fbfbff;
  border: 2px dashed #b4c6e7;
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
</style>