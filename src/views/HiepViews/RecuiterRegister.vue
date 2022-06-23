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
            <v-form ref="form" v-model="valid" lazy-validation>
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
                :rules="confirmPasswordRules"
                label="Xác nhận mật khẩu"
                outlined
                dense
                required
                :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show3 ? 'text' : 'password'"
                @click:append="show3 = !show3"
              ></v-text-field>
              <button @click="submit" :disabled="!valid" class="btn">
                Đăng ký
              </button>
            </v-form>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import ChooseRecruiter from "@/components/HiepComponents/ChooseRecruiter.vue";
import TopHeaderComponent from "@/components/HiepComponents/TopHeaderComponent.vue";
export default {
  name: "RecuiterRegister",
  components: {
    ChooseRecruiter,
    TopHeaderComponent,
  },
  methods: {
    submit() {
      this.validate();
      this.$router.push("/recruiterOnlineCVForm");
    },
    validate() {
      this.$refs.form.validate();
    },
  },
  data: () => ({
    show3: false,
    valid: true,
    companyName: "",
    companyNameRules: [
      (v) => !!v || "FullName is required",
      (v) => (v && v.length > 5) || "Password must be more than 5 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length > 5) || "Password must be more than 5 characters",
    ],
    confirmPassword: "",
    confirmPasswordRules: [
      (v) => !!v || "ConfirmPassword is required",
      (v) => v === this.password || "The password confirmation does not match.",
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