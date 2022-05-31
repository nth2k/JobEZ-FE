<template>
  <div>
    <HeaderComponent />
    <h2 class="text-center mt-3">Hồ sơ ứng viên</h2>
    <form action="" method="post">
      <div class="row mt-5">
        <div class="col-3"></div>
        <div class="col-3 left-form">
          <span>Ngày sinh <span style="color: red">*</span></span
          ><br />
          <input type="text" placeholder="Nhập dd/MM/yyyy" /><br />
          <span>Giới tính <span style="color: red">*</span></span
          ><br />
          <select name="gender" id="">
            <option value="1">Nam</option>
            <option value="0">Nữ</option></select
          ><br />
          <span>Tình trạng hôn nhân <span style="color: red">*</span></span
          ><br />
          <select name="marital" id="">
            <option value="0">Độc thân</option>
            <option value="1">Có gia đình</option></select
          ><br />
          <span>Tên trường học <span style="color: red">*</span></span
          ><br />
          <input type="text" placeholder="Tên trường học" /><br />
          <span>Xếp loại <span style="color: red">*</span></span
          ><br />
          <select name="rating" id="">
            <option value="0">Bằng giỏi</option>
            <option value="1">Bằng khá</option>
            <option value="2">ABằng trung bình</option></select
          ><br />
          <span>Số năm kinh nghiệm <span style="color: red">*</span></span
          ><br />
          <select name="experience" id="">
            <option value="1">1 năm</option>
            <option value="2">2 năm</option>
            <option value="3">3 năm</option>
            <option value="4">4 năm</option>
            <option value="5">5 năm</option></select
          ><br />
          <span>Mức lương <span style="color: red">*</span></span
          ><br />
          <select name="salary" id="">
            <option value="0">Nhỏ hơn 5M</option>
            <option value="1">5M đến 10M</option>
            <option value="2">10M đến 20M</option>
            <option value="3">20M đến 30M</option>
            <option value="4">Lớn hơn 30M</option></select
          ><br />
          <span>Hình thức làm việc <span style="color: red">*</span></span
          ><br />
          <select name="workingForm" id="">
            <option value="0">On site</option>
            <option value="1">Remote</option></select
          ><br />
        </div>
        <div class="col-5 right-form">
          <span>Mục tiêu nghề nghiệp <span style="color: red">*</span></span
          ><br />
          <span style="font-style: italic; color: #7a7a7a"
            >(có thể thêm nhiều mục tiêu hoặc thêm vào mô tả)</span
          ><br />
          <input type="checkbox" name="" id="" />Mong muốn tìm được chỗ làm ổn
          định lâu dài<br />
          <input type="checkbox" name="" id="" />Mong muốn tìm được chỗ làm có
          cơ hội thăng tiến tốt <br />
          <input type="checkbox" name="" id="" />Mong muốn tìm được chỗ làm có
          mức lương tốt <br />
          <input type="checkbox" name="" id="" />Mong muốn tìm được nơi có cơ
          hội cống hiến bản thân tốt <br />
          <input type="checkbox" name="" id="" />Mong muốn được làm việc trong
          môi trường chuyên nghiệp <br />
          <span style="font-style: italic" class="ml-5"
            >Mô tả mục tiêu nghề nghiệp ( nếu có ) :</span
          ><br />
          <textarea class="mt-3" rows="5" cols="50"></textarea><br />
          <span>Kỹ năng bản thân <span style="color: red">*</span></span
          ><br />
          <span style="font-style: italic; color: #7a7a7a"
            >( có thể thêm nhiều kỹ năng hoặc thêm vào mô tả )</span
          ><br />
          <input type="checkbox" name="" id="" />Biết lắng nghe tiếp thu ý
          kiến<br />
          <input type="checkbox" name="" id="" />Chăm chỉ, chịu khó tìm hiểu các
          vấn đề trong công việc và cuộc sống <br />
          <input type="checkbox" name="" id="" />Tinh thần trách nhiệm trong
          công việc <br />
          <input type="checkbox" name="" id="" />Chịu được áp lực trong công
          việc<br />
          <input type="checkbox" name="" id="" />Hòa đồng vui vẻ với đồng
          nghiệp<br />
          <span style="font-style: italic" class="ml-5"
            >Mô tả kỹ năng bản thân ( nếu có ) :</span
          ><br />
          <textarea class="mt-3" rows="5" cols="50"></textarea><br />
        </div>
        <div class="col-1"></div>
        <span class="mt-5 w-100 text-center"
          >Bằng việc nhấn nút đăng ký, bạn đã đồng ý thỏa thuẩn sử dụng của
          Timviec365.vn</span
        >
        <button type="submit" class="btn mt-5 mb-5 btn-regist">Đăng ký</button>
      </div>
    </form>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  name: "CandidateOnlineCVForm",
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
  margin-top: 20px;
  width: 15px;
  height: 15px;
  margin-right: 20px;
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