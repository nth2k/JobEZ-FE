<template>
  <div>
    <HeaderComponent />
    <h2 class="text-center mt-3">Thông tin hồ sơ</h2>
    <form action="" method="post">
      <div class="row mt-5">
        <div class="col-3"></div>
        <div class="col-3 left-form">
          <span>Logo công ty <span style="color: red">*</span></span
          ><br />
          <input type="file" name="logo" /><br />
          <span>Số điện thoại <span style="color: red">*</span></span
          ><br />
          <input type="text" placeholder="Số điện thoại" /><br />
          <span>Tỉnh/Thành phố<span style="color: red">*</span></span
          ><br />
          <select name="province" id="">
            <option value="0">Hà Nội</option></select
          ><br />
          <span>Quận huyện <span style="color: red">*</span></span
          ><br />
          <select name="district" id="">
            <option value="1">Tây Hồ</option></select
          ><br />
        </div>
        <div class="col-5 right-form">
          <span>Địa chỉ <span style="color: red">*</span></span
          ><br />
          <input type="text" placeholder="Địa chỉ" name="address" /><br />
          <span>Mã số thuế <span style="color: red">*</span></span
          ><br />
          <input type="text" placeholder="Mã số thuế" name="taxCode" /><br />
          <span>Giới thiệu về công ty <span style="color: red">*</span></span
          ><br />
          <textarea
            class="mt-3"
            rows="5"
            cols="50"
            name="description"
          ></textarea
          ><br />
        </div>
        <div class="col-1"></div>
        <span class="mt-5 w-100 text-center"
          >Bằng việc nhấn nút đăng ký, bạn đã đồng ý với thỏa thuận của
          JobEZ</span
        >
        <button type="submit" class="btn mt-5 mb-5 btn-regist">Đăng ký</button>
      </div>
    </form>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HiepComponents/HeaderComponent.vue";
export default {
  name: "RecruiterOnlineCVForm",
  components: {
    HeaderComponent,
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