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
              ></v-text-field>
              <p>Quên mật khẩu?</p>
              <button class="btn" @click="submit">Đăng nhập</button>
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
  name: "CandidateLogin",
  components: {
    ChooseCandidate,
    TopHeaderComponent,
  },
  data: () => ({
    valid: true,
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
  }),

  methods: {
    submit(){
      
    }
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

