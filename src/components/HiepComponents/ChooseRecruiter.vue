<template>
  <div class="col-6 intro">
    <div class="choose-account">
      <h3>JobEZ</h3>
      <p>Chọn tài khoản bạn đang sử dụng</p>
      <button class="btn btn-light candidate-btn"><router-link to="/candidateLogin">BẠN LÀ ỨNG VIÊN</router-link></button><br />
      <button class="btn btn-light recruiter-btn">BẠN LÀ NHÀ TUYỂN DỤNG</button><br />
      <div class="descibe">
        <ul>
          <li><p>Đăng tin tuyển dụng miễn phí</p></li>
          <li><p>Tặng điểm lọc hồ sơ mỗi ngày</p></li>
          <li><p>Biểu mẫu nhân sự chuyên nghiệp</p></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"ChooseRecruiter"
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

.choose-account {
  background-color: rgba(51, 51, 51, 0.3);
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  margin: 100px;
  border-radius: 20px;
  padding: 30px;
}

.choose-account button {
  margin-top: 30px;
  width: 300px;
  height: 60px;
  border-radius: 20px;
}

.choose-account p {
  margin-top: 30px;
}

button{
  opacity: 0.2;
}

.recruiter-btn{
  opacity: 1;
}
</style>