<template>
  <div id="app" class="row">
    <div class="col-sm-2" id="slide_bar">
      <SlideBar_candidate />
    </div>
    <div class="col-sm-10">
      <Header />
      <div class="mx-2 my-2 body mt-3 py-3 row">
        <div class="leftHoso">
          <Profile_menu />
        </div>
        <div class="blockright col-9">
          <div class="titleheader">Thông tin liên hệ</div>
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
                    <!-- <input
                      type="text"
                      class="form-control"
                      name="fullname"
                      id="fullname"
                      placeholder="Họ và tên"
                    /> -->
                    <v-textarea
                      label="Họ và tên"
                      v-model="fullname"
                      outlined
                      filled
                      no-resize
                      rows="1"
                      :rules="fullnameRules"
                      required
                      background-color="white"
                    ></v-textarea>
                  </div>
                  <div>
                    <span class="label">Email <span class="text-danger">*</span></span>
                  </div>
                  <!-- <input
                      type="text"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Nhậo địa chỉ email tại đây"
                    /> -->
                  <div>
                    <v-textarea
                      label="Email"
                      v-model="email"
                      outlined
                      filled
                      no-resize
                      rows="1"
                      :rules="emailRules"
                      required
                      background-color="white"
                    ></v-textarea>
                  </div>
                  <div>
                    <span class="label"
                      >Số điện thoại <span class="text-danger">*</span></span
                    >
                  </div>
                  <div>
                    <v-textarea
                      label="Nhập số điện thoại"
                      v-model="phoneNumber"
                      outlined
                      filled
                      no-resize
                      rows="1"
                      :rules="phoneNumberRules"
                      required
                      background-color="white"
                    ></v-textarea>
                  </div>
                </div>
                <div class="col-2"></div>

                <div class="col-5 text-center">
                  <img id="myImg" src="@/assets/no_avatar.jpg" alt="avatar" />
                  <!-- <v-file-input v-model="image" label="Logo công ty"></v-file-input> -->
                  <v-file-input
                    label="Avatar"
                    :rules="imageRules"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Pick an avatar"
                    prepend-icon="mdi-camera"
                    span="Avatar"
                    v-model="image"
                    v-on:change="showImage()"
                  ></v-file-input>
                </div>
              </div>
              <div class="row pt-5 block2">
                <div class="col-5">
                  <div>
                    <span class="label">Ngày sinh<span class="text-danger">*</span></span>
                  </div>
                  <div>
                    <v-textarea
                      label="Nhập ngày/tháng/năm"
                      v-model="dateOfBirth"
                      outlined
                      filled
                      no-resize
                      rows="1"
                      :rules="dateOfBirthRules"
                      required
                      background-color="white"
                    ></v-textarea>
                  </div>
                  <div>
                    <span class="label">Địa chỉ<span class="text-danger">*</span></span>
                  </div>
                  <div>
                    <v-textarea
                      label="Nhập địa chỉ hiện tại"
                      v-model="address"
                      outlined
                      filled
                      no-resize
                      rows="1"
                      :rules="addressRules"
                      required
                      background-color="white"
                    ></v-textarea>
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

                  <!-- <v-select
                    :items="listProvince"
                    label="Chọn tỉnh thành"
                    outlined
                    :rules="provinceRules"
                    v-model="province"
                    @change="onProvinceSelect()"
                    required
                  ></v-select> -->
                  <select v-model="province_id" class="w-100">
                    <option value="" disabled hidden>Chọn tỉnh thành</option>
                    <option
                      v-for="(item, index) in listProvince"
                      :key="index"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                  <div class="label blockDistrict">
                    Quận Huyện<span class="text-danger">*</span>
                  </div>
                  <!-- <v-select
                    :items="listDistrict"
                    label="Chọn quận huyện"
                    outlined
                    :rules="districtRules"
                    v-model="district"
                    required
                  ></v-select> -->
                  <select v-model="district_id" class="w-100">
                    <option value="" disabled hidden>Chọn quận huyện</option>
                    <option
                      v-for="(item, index) in listDistrict"
                      :key="index"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="text-center justify-content-center">
                <button class="btn btn-primary px-5 mt-5">Lưu</button>
              </div>
            </v-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlideBar_candidate from "@/components/ProfileCandidate/slideBar_candidate.vue";
import Header from "../ToanNT16/candidate/candidate_management/Header.vue";
import Profile_menu from "@/components/ProfileCandidate/profile_menu.vue";
import ProvinceDistrictService from "@/services/ProvinceDistrictService.js";
import ContactInfoService from "@/services/ContactInfoService";

export default {
  name: "EditContactInfo",
  components: {
    SlideBar_candidate,
    Header,
    Profile_menu,
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
      province: "",
      province_id: "",
      provinceRules: [(v) => !!v || "Vui lòng chọn tỉnh thành"],
      listProvince: [],
      district: "",
      district_id: "",
      districtRules: [(v) => !!v || "Vui lòng chọn quận huyện"],
      listDistrict: [],
      image: null,
      base64: null,
    };
  },
  methods: {
    showImage() {
      // document.getElementById("myImg").src = this.base64;
    },
    // onProvinceSelect(event) {
    //   ProvinceDistrictService.getAllDistrict(event.target.value).then((rs) => {
    //     this.listDistrict = rs.data;
    //   });
    // },
    getData() {
      ProvinceDistrictService.getAllProvince().then((rs) => {
        this.listProvince = rs.data;
      });
      ContactInfoService.getContactInfo(this.userId).then((rs) => {
        this.fullname = rs.data.fullname;
        this.email = rs.data.email;
        this.phoneNumber = rs.data.phoneNumber;
        this.dateOfBirth = rs.data.dateOfBirth;
        this.address = rs.data.address;
        this.gender = rs.data.gender;
        this.married = rs.data.married;
        this.province = rs.data.district;
        this.district = rs.data.province;
        this.district_id = rs.data.districtId;
        this.province_id = rs.data.provinceId;
      });
      ProvinceDistrictService.getAllDistrict().then((rs) => {
        this.listDistrict = rs.data;
        // console.log(rs.data);
      });
    },
    createBase64Image: function (FileObject) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.base64 = event.target.result;
      };
      reader.readAsDataURL(FileObject);
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
    // this.getContactInfo();
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
select {
  border: 1px solid gray;
  border-radius: 5px;
  height: 57px;
  padding-left: 13px;
}
.titleheader {
  margin-left: 0.5rem;
  margin-bottom: 20px;
  border-bottom: 1px solid gray;
  width: 183px;
  color: #2a3563;
  font-size: 20px;
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
.blockDistrict {
  margin-top: 32px;
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
