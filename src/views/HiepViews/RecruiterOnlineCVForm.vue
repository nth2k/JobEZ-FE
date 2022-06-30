<template>
  <v-app>
    <div>
      <HeaderComponent />
      <h2 class="text-center mt-3">Hồ sơ nhà tuyển dụng</h2>
      <v-form ref="form" v-model="valid" lazy-validation>
        <div class="row mt-5">
          <div class="col-3"></div>
          <div class="col-3 left-form">
            <span>Logo công ty <span style="color: red">*</span></span
            ><br />
            <v-file-input accept="image/*" label="Logo công ty"></v-file-input
            ><br />
            <span>Số điện thoại <span style="color: red">*</span></span
            ><br />
            <v-text-field
              label="Nhập số điện thoại"
              outlined
              dense
              v-model="phone"
              :rules="phoneRules"
              required
            ></v-text-field
            ><br />
            <span>Tỉnh/Thành phố<span style="color: red">*</span></span
            ><br />
            <v-select
              :items="city"
              label="Chọn tỉnh/Thành phố"
              required
            ></v-select
            ><br />
            <span>Quận huyện <span style="color: red">*</span></span
            ><br />
            <v-select
              :items="province"
              label="Chọn quận huyện"
              required
            ></v-select
            ><br />
          </div>
          <div class="col-3 right-form">
            <span>Địa chỉ <span style="color: red">*</span></span
            ><br />
            <v-text-field
              label="Nhập địa chỉ"
              outlined
              dense
              v-model="address"
              :rules="addressRules"
              required
            ></v-text-field
            ><br />
            <span>Mã số thuế <span style="color: red">*</span></span
            ><br />
            <v-text-field
              label="Nhập mã số thuế"
              outlined
              dense
              v-model="taxCode"
              :rules="taxCodeRules"
              required
            ></v-text-field
            ><br />
            <span>Giới thiệu về công ty <span style="color: red">*</span></span
            ><br />
            <v-textarea
              outlined
              name="description"
              label="Giới thiệu về công ty"
              v-model="description"
              :rules="descriptionRules"
            ></v-textarea
            ><br />
          </div>
          <div class="col-1"></div>
          <span class="mt-5 w-100 text-center"
            >Bằng việc nhấn nút đăng ký, bạn đã đồng ý với thỏa thuận của
            JobEZ</span
          >
          <button type="submit" class="btn mt-5 mb-5 btn-regist">
            Đăng ký
          </button>
        </div>
      </v-form>
    </div>
  </v-app>
</template>

<script>
import HeaderComponent from "@/components/HiepComponents/HeaderComponent.vue";
export default {
  name: "RecruiterOnlineCVForm",
  components: {
    HeaderComponent,
  },
  data: () => ({
    phone: "",
    phoneRules: [
      (v) => !!v || "Phone is required",
      (v) => (v && v.length == 10) || "Phone must be 10 digits",
    ],
    city: [],
    province: [],
    address: "",
    addressRules: [
      (v) => !!v || "Address is required",
      (v) => (v && v.length > 5) || "Address must be more than 5 characters",
    ],
    taxCode: "",
    taxCodeRules: [
      (v) => !!v || "TaxCode is required",
      (v) => (v && v.length > 5) || "TaxCode must be more than 5 characters",
    ],
    description: "",
    descriptionRules: [
      (v) => !!v || "Description is required",
      (v) =>
        (v && v.length > 5) || "Description must be more than 5 characters",
    ],
  }),
  methods: {
    submit() {
      // this.validate();
      this.$router.push("/recruiterLogin");
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

.left-form select {
  width: 80%;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.right-form input {
  width: 55%;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 20px;
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

textarea {
  border: 1px solid black;
}
</style>