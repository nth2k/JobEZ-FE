<template>
  <div id="app" class="row">
    <div class="col-sm-2" id="slide_bar">
      <Navigator />
    </div>
    <div class="col-sm-10">
      <Header />
      <div class="body mx-2 pl-2 py-2 d-flex mt-4 row">
        <div>
          <Profile_menu />
        </div>
        <div class="blockright col-9">
          <div class="titleRight">Thông tin liên hệ</div>
          <div class="container ml-3">
            <v-form ref="form">
              <div class="row">
                <div class="col-5">
                  <div class="title">
                    <span class="label">Họ và tên <span class="star">*</span></span>
                    <div class="titleright">
                      <span>(</span><span class="star">*</span
                      ><span>)Thông tin bắt buộc</span>
                    </div>
                  </div>
                  <div>
                    <!-- <v-textarea
                      label="Họ và tên"
                      v-model="fullname"
                      outlined
                      filled
                      no-resize
                      rows="1"
                      :rules="fullnameRules"
                      required
                      background-color="white"
                    ></v-textarea> -->
                    <v-text-field
                      label="Họ và tên"
                      outlined
                      dense
                      v-model="fullname"
                      :rules="fullnameRules"
                      required
                    ></v-text-field>
                  </div>
                  <div>
                    <span class="label">Email <span class="text-danger">*</span></span>
                  </div>
                  <div>
                    <!-- <v-textarea
                      label="Email"
                      v-model="email"
                      outlined
                      filled
                      no-resize
                      rows="1"
                      :rules="emailRules"
                      required
                      background-color="white"
                    ></v-textarea> -->
                    <v-text-field
                      label="Email"
                      outlined
                      dense
                      v-model="email"
                      :rules="emailRules"
                      required
                    ></v-text-field>
                  </div>
                  <div>
                    <span class="label"
                      >Số điện thoại <span class="text-danger">*</span></span
                    >
                  </div>
                  <div>
                    <!-- <v-textarea
                      label="Nhập số điện thoại"
                      v-model="phoneNumber"
                      outlined
                      filled
                      no-resize
                      rows="1"
                      :rules="phoneNumberRules"
                      required
                      background-color="white"
                    ></v-textarea> -->
                    <v-text-field
                      label="Nhập số điện thoại"
                      outlined
                      dense
                      v-model="phoneNumber"
                      :rules="phoneNumberRules"
                      required
                    ></v-text-field>
                  </div>
                </div>
                <div class="col-2"></div>

                <div class="col-5 text-center">
                  <img
                    id="myImg"
                    v-if="base64 == null"
                    src="@/assets/no_avatar.jpg"
                    alt="avatar"
                  />
                  <img id="myImg1" v-if="base64 != null" :src="base64" alt="avatar" />
                  <!-- <v-file-input v-model="image" label="Logo công ty"></v-file-input> -->
                  <v-file-input
                    label="Avatar"
                    :rules="imageRules"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Pick an avatar"
                    prepend-icon="mdi-camera"
                    span="Avatar"
                    v-model="image"
                  ></v-file-input>
                </div>
              </div>
              <div class="row pt-5 block2">
                <div class="col-5">
                  <div>
                    <span class="label">Ngày sinh<span class="text-danger">*</span></span>
                  </div>
                  <div>
                    <!-- <v-textarea
                      label="Nhập ngày/tháng/năm"
                      v-model="dateOfBirth"
                      outlined
                      filled
                      no-resize
                      rows="1"
                      :rules="dateOfBirthRules"
                      required
                      background-color="white"
                    ></v-textarea> -->
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="dateOfBirth"
                          label="Ngày sinh"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          required
                          :rules="dateOfBirthRules"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="dateOfBirth"
                        :active-picker.sync="activePicker"
                        :max="
                          new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                            .toISOString()
                            .substr(0, 10)
                        "
                        min="1950-01-01"
                      ></v-date-picker>
                    </v-menu>
                  </div>
                  <div>
                    <span class="label">Địa chỉ<span class="text-danger">*</span></span>
                  </div>
                  <div>
                    <!-- <v-textarea
                      label="Nhập địa chỉ hiện tại"
                      v-model="address"
                      outlined
                      filled
                      no-resize
                      rows="1"
                      :rules="addressRules"
                      required
                      background-color="white"
                    ></v-textarea> -->
                    <v-text-field
                      label="Nhập địa chỉ hiện tại"
                      outlined
                      dense
                      v-model="address"
                      :rules="addressRules"
                      required
                    ></v-text-field>
                  </div>
                  <div>
                    <span class="label"
                      >Giới tính <span class="text-danger">*</span></span
                    >
                  </div>
                  <v-select
                    :items="listGender"
                    label="Chọn giới tính"
                    outlined
                    :rules="genderRules"
                    v-model="gender"
                    required
                  ></v-select>
                </div>
                <div class="col-2"></div>
                <div class="col-5">
                  <span class="label">Hôn nhân <span class="text-danger">*</span></span>
                  <v-select
                    :items="listMarried"
                    label="Chọn tình trạng hôn nhân"
                    outlined
                    :rules="marriedRules"
                    v-model="married"
                    required
                  ></v-select>

                  <div class="label">Tinh thành<span class="text-danger">*</span></div>
                  <v-select
                    v-model="province_id"
                    @change="onProvinceSelect"
                    :items="listProvince"
                    label="Chọn tỉnh thành"
                    item-text="name"
                    item-value="id"
                    :rules="provinceRules"
                  ></v-select>
                  <div class="label blockDistrict">
                    Quận Huyện<span class="text-danger">*</span>
                  </div>
                  <v-select
                    v-model="district_id"
                    :items="listDistrict"
                    label="Chọn quận huyện"
                    item-text="name"
                    item-value="id"
                    :rules="districtRules"
                  ></v-select>
                </div>
              </div>
              <div class="text-center justify-content-center">
                <button
                  class="btn btn-primary px-5 mt-5"
                  @click.prevent="saveContactInfo"
                >
                  Lưu
                </button>
              </div>
            </v-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../ToanNT16/candidate/candidate_management/Header.vue";
import Profile_menu from "@/components/ProfileCandidate/profile_menu.vue";
import ContactInfoService from "@/services/ContactInfoService";
// import AddressService from "@/services/AddressService";
import Navigator from "../ToanNT16/candidate/candidate_management/Navigator.vue";
import VietNameAddressService from "@/services/VietNamAddressService";

export default {
  name: "EditContactInfo",
  components: {
    Header,
    Profile_menu,
    Navigator,
  },
  data() {
    return {
      userId: this.$route.params.userId,
      fullname: "",
      fullnameRules: [(v) => !!v || "Họ và tên không được để trống"],
      email: "",
      emailRules: [
        (v) => !!v || "Email không được để trống",
        (v) =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || "E-mail must be valid",
      ],
      phoneNumber: "",
      phoneNumberRules: [
        (v) => !!v || "Số điện thoại không được để trống",
        (v) => /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(v) || "Phone must be valid",
      ],
      imageRules: [
        (v) => !v || v.size < 2000000 || "Avatar size should be less than 2 MB!",
      ],
      dateOfBirth: "",
      dateOfBirthRules: [(v) => !!v || "Ngày sinh không được để trống"],
      address: "",
      addressRules: [(v) => !!v || "Địa chỉ không được để trống"],
      gender: "",
      genderRules: [(v) => !!v || "Vui lòng chọn giới tính"],
      listGender: ["Nam", "Nữ"],
      married: "",
      marriedRules: [(v) => !!v || "Vui lòng chọn tình trạng hôn nhân"],
      listMarried: ["Độc thân", "Đã kết hôn"],
      province_id: "",
      provinceRules: [(v) => !!v || "Vui lòng chọn tỉnh thành"],
      listProvince: [],
      district_id: "",
      districtRules: [(v) => !!v || "Vui lòng chọn quận huyện"],
      listDistrict: [],
      image: null,
      base64: null,
      activePicker: null,
      menu: false,
    };
  },
  methods: {
    onProvinceSelect() {
      VietNameAddressService.getAllDistrict(this.province_id).then((rs) => {
        this.listDistrict = rs.data;
      });
    },
    getData() {
      ContactInfoService.getContactInfo(this.userId).then((rs) => {
        this.fullname = rs.data.fullname;
        this.email = rs.data.email;
        this.phoneNumber = rs.data.phoneNumber;
        this.dateOfBirth = rs.data.dateOfBirth;
        this.address = rs.data.address;
        this.gender = rs.data.gender;
        this.married = rs.data.married;
        this.base64 = rs.data.imageBase64;
        VietNameAddressService.getAllProvince().then((res) => {
          this.listProvince = res.data;
          this.province_id = rs.data.provinceId;
          VietNameAddressService.getAllDistrict(this.province_id).then((response) => {
            this.listDistrict = response.data;
            this.district_id = rs.data.districtId;
          });
        });
      });
    },
    createBase64Image: function (FileObject) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.base64 = event.target.result;
      };
      reader.readAsDataURL(FileObject);
    },
    saveContactInfo() {
      if (this.$refs.form.validate()) {
        console.log({
          userId: this.userId,
          fullname: this.fullname,
          email: this.email,
          phoneNumber: this.phoneNumber,
          dateOfBirth: this.dateOfBirth,
          address: this.address,
          gender: this.gender,
          married: this.married,
          imageBase64: this.base64,
          provinceId: this.province_id,
          districtId: this.district_id,
        });
        ContactInfoService.saveContactInfo({
          userId: this.userId,
          fullname: this.fullname,
          email: this.email,
          phoneNumber: this.phoneNumber,
          dateOfBirth: this.dateOfBirth,
          address: this.address,
          gender: this.gender,
          married: this.married,
          imageBase64: this.base64,
          provinceId: this.province_id,
          districtId: this.district_id,
        })
          .then(() => {
            this.$store.dispatch("setSnackbar", {
              text: "Cập nhật thành công",
            });
            this.$router.push("/contactinfo");
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
  watch: {
    image: function (newVal) {
      if (newVal) {
        this.createBase64Image(newVal);
      } else {
        this.base64 = null;
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
.block2 {
  border-top: 1px solid lightgray;
}
.btnNotSave {
  border: 1px solid blue;
  color: blue;
  background-color: white;
}
.star {
  color: red;
}
.body {
  border: 1px solid blue;
  border-radius: 5px;
  box-shadow: 5px 5px lightgray;
}
.title {
  font-weight: bold;
}
.col-12 {
  margin: 0;
  padding: 0;
}
.titleright {
  float: right;
  font-weight: initial;
  font-size: 12px;
  font-style: italic;
}
.titleRight {
  margin-bottom: 20px;
  margin-left: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
  width: 130px;
  color: #2a3563;
  font-weight: bold;
}
.blockright {
  border-left: 1px solid gray;
}

.title {
  margin: 5px 0;
}

.btnSave {
  color: white;
  padding: 5px 70px;
}
.label {
  font-size: 15px;
  font-weight: bold;
}
img {
  width: 50%;
  border-radius: 50%;
}
</style>
