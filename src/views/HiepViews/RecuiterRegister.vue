<template>
  <v-app>
    <div>
      <TopHeaderComponent />
      <div class="row">
        <ChooseRecruiter />
        <div class="col-6" style="padding-left: 150px; padding-top: 50px">
          <div class="tab">
            <div class="login">
              <button class="btn">
                <router-link to="/recruiterLogin">Đăng nhập</router-link>
              </button>
            </div>
            <div class="register">
              <button class="btn">
                <router-link to="/recruiterRegister">Đăng kí</router-link>
              </button>
            </div>
          </div>
          <h2>Bạn chưa có tài khoản?</h2>
          <div class="login-form">
            <v-form ref="form">
              <h5>Tên công ty<span style="color: red">*</span></h5>
              <v-text-field
                label="Tên công ty"
                outlined
                dense
                v-model="companyName"
                :rules="companyNameRules"
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
            </v-form>
            <button @click="submit()" :disabled="!valid" class="btn">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import ChooseRecruiter from "@/components/HiepComponents/ChooseRecruiter.vue";
import TopHeaderComponent from "@/components/HiepComponents/TopHeaderComponent.vue";
import RecruiterRegisterService from "@/services/RecruiterRegisterService.js";
export default {
  name: "RecuiterRegister",
  components: {
    ChooseRecruiter,
    TopHeaderComponent,
  },
  methods: {
    validatePassword(value) {
      return value === this.password || "The password confirmation does not match."
    },
    async submit() {
      if (this.$refs.form.validate()) {
        await RecruiterRegisterService.addRecruiter({
          full_name: this.companyName,
          email: this.email,
          password: this.password,
          // role: {
          //   id: 2,
          //   rollName: "Recruiter",
          // },
        })
          .then((rs) => {
            this.$store.dispatch("setSnackbar", {
              text: "Đăng kí nhà tuyển dụng bước 1 thành công",
            });
            this.$router.push({ name: 'RecruiterOnlineCVForm', params: { id: rs.data.id }});
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
  data: () => ({
    show3: false,
    valid: true,
    companyName: "",
    companyNameRules: [
      (v) => !!v || "FullName bắt buộc",
      (v) => (v && v.length > 5) || "FullName phải hơn 5 kí tự",
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
    confirmPasswordRules: [
      (v) => !!v || "ConfirmPassword bắt buộc",
    ],
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

.login-form p {
  float: right;
}

.login-form button {
  width: 500px;
  height: 50px;
  background-color: #6874d7;
  color: white;
  margin-top: 20px;
}
</style>