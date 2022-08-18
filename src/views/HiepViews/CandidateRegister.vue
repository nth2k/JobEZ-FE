<template>
  <v-app>
    <div>
      <TopHeaderComponent />
      <div class="row">
        <ChooseCandidate />
        <div class="col-6" style="padding-left: 150px; padding-top: 50px">
          <div class="tab">
            <div class="login">
              <button class="btn">
                <router-link to="/candidateLogin">Đăng nhập</router-link>
              </button>
            </div>
            <div class="register">
              <button class="btn">
                <router-link to="/candidateRegister">Đăng kí</router-link>
              </button>
            </div>
          </div>
          <h2>Bạn chưa có tài khoản?</h2>
          <div class="login-form">
            <v-form ref="form">
              <h5>Tên đầy đủ<span style="color: red">*</span></h5>
              <v-text-field
                label="Tên đầy đủ"
                outlined
                dense
                v-model="fullName"
                :rules="fullNameRules"
                required
              ></v-text-field>
              <h5>Email<span style="color: red">*</span></h5>
              <v-text-field
                label="Nhập Email"
                outlined
                dense
                v-model="email"
                :rules="emailRules"
                required
              ></v-text-field>
              <h5>Mật khẩu<span style="color: red">*</span></h5>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Nhập Password"
                outlined
                dense
                required
                :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show3 ? 'text' : 'password'"
                @click:append="show3 = !show3"
              ></v-text-field>
              <h5>Xác nhận mật khẩu<span style="color: red">*</span></h5>
              <v-text-field
                v-model="confirmPassword"
                :rules="confirmPasswordRules.concat(validatePassword)"
                label="Xác nhận mật khẩu"
                outlined
                dense
                required
                :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show3 ? 'text' : 'password'"
                @click:append="show3 = !show3"
              ></v-text-field>
              <span>Số điện thoại<span style="color: red">*</span></span
              ><br />
              <v-text-field
                class="mt-5"
                label="Số điện thoại"
                outlined
                dense
                v-model="phone"
                :rules="phoneRules"
                required
              ></v-text-field>
              <h5>Tỉnh/Thành phố<span style="color: red">*</span></h5>
              <v-row>
                <v-col cols="6" sm="6">
                  <!-- <v-select
                    :items="city"
                    label="Chọn tỉnh/Thành phố"
                    :rules="cityRules"
                    required
                  ></v-select> -->
                  <select
                    class="w-100 h-75"
                    @change="onProvinceSelect"
                    v-model="selectedProvince"
                  >
                    <option value="" disabled hidden>Chọn tỉnh thành</option>
                    <option
                      v-for="(item, index) in province"
                      :key="index"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </v-col>
                <v-col cols="6" sm="6">
                  <select
                    class="w-100 h-75"
                    @change="onDistrictSelect"
                    v-model="selectedDistrict"
                  >
                    <option value="" disabled hidden>Chọn quận huyện</option>
                    <option
                      v-for="(item, index) in district"
                      :key="index"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </v-col>
              </v-row>
            </v-form>
            <button @click="submit" class="btn">Đăng ký</button>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import ChooseCandidate from "@/components/HiepComponents/ChooseCandidate.vue";
import TopHeaderComponent from "@/components/HiepComponents/TopHeaderComponent.vue";
import CandidateRegisterService from "@/services/CandidateRegisterService.js";
import AddressService from "@/services/AddressService.js";

export default {
  name: "CandidateRegister",
  components: {
    ChooseCandidate,
    TopHeaderComponent,
  },
  methods: {
    validatePassword(value) {
      return (
        value === this.password || "The password confirmation does not match."
      );
    },
    async submit() {
      if (this.$refs.form.validate()) {
        await CandidateRegisterService.addCandidate({
          full_name: this.fullName,
          email: this.email,
          password: this.password,
          province_id: 1,
          city_id: 2,
          phone_number: this.phone,
          // role: {
          //   id: 1,
          //   rollName: "Candidate",
          // },
        })
          .then((rs) => {
            this.$store.dispatch("setSnackbar", {
              text: "Đăng kí ứng viên bước 1 thành công",
            });
            this.$router.push({
              name: "ChooseCVType",
              params: { id: rs.data.id },
            });
          })
          .catch(() => {
            this.$store.dispatch("setSnackbar", {
              color: "error",
              text: "Có lỗi xảy ra! Vui lòng thử lại",
            });
          });
      }
    },
    getProvince() {
      AddressService.getProvince().then((rs) => {
        this.province = rs.data;
        console.log(rs);
      });
    },
    onProvinceSelect(event) {
      AddressService.getDistrict(event.target.value).then((rs) => {
        this.district = rs.data;
      });
    },
    onDistrictSelect(event) {
      console.log(event.target.value);
    },
  },
  created() {
    this.getProvince();
  },
  data: () => ({
    show3: false,
    valid: true,
    fullName: "",
    fullNameRules: [
      (v) => !!v || "Tên đầy đủ bắt buộc",
      (v) => (v && v.length > 5) || "Tên đầy đủ phải lớn hơn 5 kí tự",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail bắt buộc",
      (v) =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "E-mail phải đúng format",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password bắt buộc",
      (v) => (v && v.length > 5) || "Password phải hơn 5 kí tự",
    ],
    confirmPassword: "",
    confirmPasswordRules: [(v) => !!v || "ConfirmPassword bắt buộc"],
    phone: "",
    phoneRules: [
      (v) => !!v || "Phone is required",
      (v) => /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(v) || "Phone phải đúng định dạng",
    ],
    listProvince: [],
    province: [],
    provinceRules: [(v) => !!v || "province bắt buộc"],
    district: [],
    districtRules: [(v) => !!v || "district bắt buộc"],
    selectedProvince: "",
    selectedDistrict: "",
  }),
};
</script>

<style scoped>
.tab {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.tab button {
  color: #6874d7;
  width: 200px;
  height: 40px;
  background-color: rgba(76, 91, 212, 0.1);
  border-radius: 5px;
}

.tab button a {
  text-decoration: none;
  color: #6874d7;
}

h2 {
  margin-top: 20px;
  color: #6874d7;
}

.login-form {
  margin-top: 20px;
  width: 80%;
}

.login-form h5 {
  margin-bottom: 20px;
}

.login-form input {
  margin-bottom: 20px;
  width: 500px;
  height: 50px;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid black;
}

.login-form select {
  width: 40%;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  margin-right: 20px;
  padding: 5px;
  margin-bottom: 20px;
}

.login-form p {
  float: right;
}

.login-form button {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 500px;
  height: 50px;
  background-color: #6874d7;
  color: white;
}
</style>