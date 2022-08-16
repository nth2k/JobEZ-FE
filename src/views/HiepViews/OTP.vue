<template>
  <v-app>
    <div>
      <TopHeaderComponent />
      <div class="row">
        <div class="col-6 intro">
          <h1>JobEZ</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 15
          </p>
        </div>
        <div class="col-6" style="padding: 150px">
          <h2>Nhập mã xác thực</h2>
          <p class="mt-4">
            Vui lòng điền mã xác thực gồm 6 số. Mã xác thực sẽ được gửi về địa
            chỉ e-mail của bạn.
          </p>
          <div>
            <div class="ma-auto position-relative" style="max-width: 300px">
              <v-otp-input
                v-model="otp"
                :disabled="loading"
                @finish="onFinish"
              ></v-otp-input>
              <v-overlay absolute :value="loading">
                <v-progress-circular
                  indeterminate
                  color="primary"
                ></v-progress-circular>
              </v-overlay>
            </div>
            <div class="text--caption">Nhập hoặc copy/paste.</div>

            <v-snackbar
              v-model="snackbar"
              :color="snackbarColor"
              :timeout="2000"
            >
              {{ text }}
            </v-snackbar>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import TopHeaderComponent from "@/components/HiepComponents/TopHeaderComponent.vue";
export default {
  name: "OTP",
  components: {
    TopHeaderComponent,
  },
  data: () => ({
    loading: false,
    snackbar: false,
    snackbarColor: "default",
    otp: "",
    text: "",
    expectedOtp: "133707",
  }),
  methods: {
    onFinish(rsp) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.snackbarColor = rsp === this.expectedOtp ? "success" : "warning";
        this.text = `Processed OTP with "${rsp}" (${this.snackbarColor})`;
        this.snackbar = true;
      }, 3500);
    },
  },
};
</script>

<style scoped>
.intro {
  background-image: url(https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGFob2V8ZW58MHx8MHx8&w=1000&q=80);
  height: 650px;
  left: 40px;
  top: 45px;
  border-radius: 20px;
}

.intro h1 {
  color: white;
  margin-top: 200px;
  margin-left: 300px;
  margin-right: 300px;
}

.intro p {
  color: white;
  margin: 50px 100px;
}

.tab button a {
  text-decoration: none;
  color: #6874d7;
}

h2 {
  margin-top: 20px;
  color: #6874d7;
}

.position-relative {
  position: relative;
}
</style>

