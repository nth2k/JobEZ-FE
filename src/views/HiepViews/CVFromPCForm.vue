<template>
  <v-app>
    <div>
      <HeaderComponent />
      <h2 class="text-center mt-5 mb-5">Hồ sơ ứng viên</h2>
      <v-form ref="form" v-model="valid" lazy-validation>
        <div class="row">
          <div class="col-3"></div>
          <div class="col-3 left-form">
            <span>Ngày sinh<span style="color: red">*</span></span
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
                  label="Picker in menu"
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
          </div>
          <div class="col-3 right-form">
            <span>Xếp loại<span style="color: red">*</span></span
            ><br />
            <v-col cols="12" sm="12">
              <v-select
                :items="rating"
                label="Chọn xếp loại"
                required
              ></v-select> </v-col
            ><br />
            <span>Số năm kinh nghiệm<span style="color: red">*</span></span
            ><br />
            <v-col cols="12" sm="12">
              <v-select
                :items="experience"
                label="Chọn năm kinh nghiệm"
                required
              ></v-select> </v-col
            ><br />
          </div>
          <div class="col-3"></div>
          <input type="file" name="file" id="" class="file-cv" />
        </div>
        <button @click="submit" class="btn mt-5 mb-5 btn-regist">
          Đăng ký
        </button>
      </v-form>
    </div>
  </v-app>
</template>

<script>
import HeaderComponent from "@/components/HiepComponents/HeaderComponent.vue";
export default {
  name: "CVFromPCForm",
  components: {
    HeaderComponent,
  },
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    university: "",
    universityRules: [
      (v) => !!v || "University is required",
      (v) => (v && v.length > 5) || "University must be more than 5 characters",
    ],
    rating: [],
    experience: [],
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

.right-form select {
  width: 80%;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.file-cv {
  position: relative;
  width: 351px;
  height: 196px;
  left: 600px;
  margin-top: 20px;
  padding: 80px;
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