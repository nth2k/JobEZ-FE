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
            <v-form ref="form" v-model="valid" lazy-validation>
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
                :rules="confirmPasswordRules"
                label="Xác nhận mật khẩu"
                outlined
                dense
                required
                :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show3 ? 'text' : 'password'"
                @click:append="show3 = !show3"
              ></v-text-field>
              <h5>Số điện thoại<span style="color: red">*</span></h5>
              <v-text-field
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
                  <v-select
                    :items="city"
                    label="Chọn tỉnh/Thành phố"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="6" sm="6">
                  <v-select
                    :items="province"
                    label="Chọn quận huyện"
                    required
                  ></v-select>
                </v-col>
              </v-row>
              <h5>Vị trí mong muốn<span style="color: red">*</span></h5>
              <v-text-field
                label="Vị trí mong muốn"
                outlined
                dense
                v-model="desiredPosition"
                :rules="desiredPositionRules"
                required
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
import ChooseCandidate from "@/components/HiepComponents/ChooseCandidate.vue";
import TopHeaderComponent from "@/components/HiepComponents/TopHeaderComponent.vue";
export default {
  name: "CandidateRegister",
  components: {
    ChooseCandidate,
    TopHeaderComponent,
  },
  methods: {
    submit() {
      this.validate();
      this.$router.push("/chooseCVType");
    },
    validate() {
      this.$refs.form.validate();
    },
  },
  data: () => ({
    show3: false,
    valid: true,
    fullName: "",
    fullNameRules: [
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
    phone: "",
    phoneRules: [
      (v) => !!v || "Phone is required",
      (v) => (v && v.length == 10) || "Phone must be 10 digits",
    ],
    city: [],
    province: [],
    desiredPosition: "",
    desiredPositionRules: [
      (v) => !!v || "Phone is required",
      (v) =>
        (v && v.length > 5) ||
        "Desired Position must be more than 5 characters",
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