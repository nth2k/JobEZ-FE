<template>
  <v-app>
    <div>
      <HeaderComponent />
      <h2 class="text-center mt-3">Hồ sơ nhà tuyển dụng</h2>
      <v-form ref="form">
        <div class="row mt-5">
          <div class="col-3"></div>
          <div class="col-3 left-form">
            <span>Logo công ty <span style="color: red">*</span></span
            ><br />
            <v-file-input v-model="image" label="Logo công ty"></v-file-input
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
            <select
              class="w-100"
              @change="onProvinceSelect"
              v-model="selectedProvince"
            >
              <option value="" disabled hidden>Chọn tỉnh thành</option>
              <option
                v-for="(item, index) in province"
                :key="index"
                :value="item.province_id"
              >
                {{ item.province_name }}
              </option></select
            ><br />
            <span>Quận huyện <span style="color: red">*</span></span
            ><br />
            <select
              class="w-100"
              @change="onDistrictSelect"
              v-model="selectedDistrict"
            >
              <option value="" disabled hidden>Chọn quận huyện</option>
              <option
                v-for="(item, index) in district"
                :key="index"
                :value="item.district_id"
              >
                {{ item.district_name }}
              </option></select
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
        </div>
      </v-form>
      <button @click="submit()" class="btn mt-5 mb-5 btn-regist">
        Đăng ký
      </button>
    </div>
  </v-app>
</template>

<script>
import HeaderComponent from "@/components/HiepComponents/HeaderComponent.vue";
import RecruiterRegisterService from "@/services/RecruiterRegisterService.js";
import AddressService from "@/services/AddressService.js";
export default {
  name: "RecruiterOnlineCVForm",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      recruiterId: this.$route.params.id,
      image: null,
      base64: null,
      phone: "",
      phoneRules: [
        (v) => !!v || "Phone is required",
        (v) =>
          /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(v) || "Phone must be valid",
      ],
      province: [],
      district: [],
      address: "",
      addressRules: [
        (v) => !!v || "Address is required",
        (v) => (v && v.length > 5) || "Address must be more than 5 characters",
      ],
      taxCode: "",
      taxCodeRules: [
        (v) => !!v || "TaxCode is required",
        (v) => /(^[0-9]{10,13}$)\b/.test(v) || "TaxCode must be valid",
      ],
      description: "",
      descriptionRules: [
        (v) => !!v || "Description is required",
        (v) =>
          (v && v.length > 5) || "Description must be more than 5 characters",
      ],
      selectedProvince: "",
      selectedDistrict: "",
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
    createBase64Image: function (FileObject) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.base64 = event.target.result;
      };
      reader.readAsDataURL(FileObject);
    },
    getProvince() {
      AddressService.getProvince().then((rs) => {
        this.province = rs.data.results;
      });
    },
    onProvinceSelect(event) {
      AddressService.getDistrict(event.target.value).then((rs) => {
        this.district = rs.data.results;
        console.log(event.target.value);
      });
    },
    onDistrictSelect(event) {
      console.log(event.target.value);
    },
    submit() {
      if (this.$refs.form.validate()) {
        RecruiterRegisterService.updateRecruiter(this.recruiterId, {
          images: this.base64,
          phone: this.phone,
          addressName: this.address,
          taxtNumber: this.taxCode,
          description: this.description,
        })
          .then(() => {
            this.$store.dispatch("setSnackbar", {
              text: "Đăng kí nhà tuyển dụng bước 2 thành công",
            });
            this.$router.push("/recruiterLogin");
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
  created() {
    this.getProvince();
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