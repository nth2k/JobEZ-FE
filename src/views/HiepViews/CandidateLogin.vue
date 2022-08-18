<template>
  <v-app>
    <div>
      <TopHeaderComponent />
      <div class="row">
        <ChooseCandidate />
        <div class="col-6" style="padding: 150px">
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
          <h2>Chào mừng trở lại!</h2>
          <div class="login-form">
            <v-form ref="form" v-model="valid" lazy-validation>
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
              <p>Quên mật khẩu?</p>
            </v-form>
            <button class="btn" :disabled="!valid" @click="submit">
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import ChooseCandidate from "@/components/HiepComponents/ChooseCandidate.vue";
import TopHeaderComponent from "@/components/HiepComponents/TopHeaderComponent.vue";
import LoginService from "@/services/LoginService.js";
import axios from "axios";

export default {
  name: "CandidateLogin",
  components: {
    ChooseCandidate,
    TopHeaderComponent,
  },
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail không được trống",
      (v) =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "E-mail phải đúng fomat",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password không được trống",
      (v) => (v && v.length > 5) || "Password phải lớn hơn 5 kí tự",
    ],
    show3: false,
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        LoginService.getUser({
          email: this.email,
          password: this.password,
        })
          .then((rs) => {
            this.$store.dispatch("setSnackbar", {
              text: "Đăng nhập thành công",
            });
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${rs.data.refreshToken.token}`;

            if (rs.data.accessToken) {
              localStorage.setItem("user", JSON.stringify(rs.data));
            }

            this.$router.push("/");
          })
          .catch(() => {
            this.$store.dispatch("setSnackbar", {
              color: "error",
              text: "Có lỗi xảy ra! Vui lòng thử lại",
            });
          });
      }
    },
    validate() {
      this.$refs.form.validate();
    },
  },
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
}
</style>

