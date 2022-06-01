<template>
  <div>
      <div class="right">
        <div class="title titleRight">Thông tin liên hệ</div>
        <div style="display: flex; margin-bottom: 17px">
          <div class="right-left">
            <div>
              <img
                class="img-avatar"
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt=""
              />
            </div>
            <span>Lập trình viên PHP</span>
          </div>
          <div class="right-middle">
            <div>
              <span class="title">Họ và tên:</span>
              <span>Nguyễn Văn A</span>
            </div>
            <div>
              <span class="title">Email:</span>
              <span>Tuan@gmail.com</span>
            </div>
            <div>
              <span class="title">Số điện thoại:</span>
              <span>0123123123</span>
            </div>
            <div>
              <span class="title">Ngày sinh:</span>
              <span>15/03/2000</span>
            </div>
            <div>
              <span class="title">Địa chỉ:</span>
              <span>419 Ngọc Lâm, Long Biên, Hà Nội</span>
            </div>
          </div>

          <div class="right-right">
            <div>
              <span class="title">Giới tính:</span>
              <span>Nam</span>
            </div>
            <div>
              <span class="title">Hôn nhân:</span>
              <span>Độc thân</span>
            </div>
            <div>
              <span class="title">Tỉnh thành:</span>
              <span>Hà Nội</span>
            </div>
            <div>
              <span class="title">Quận huyện:</span>
              <span>Đông Anh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
</script>

<style scoped>
.body {
  display: flex;
}
a {
  text-decoration: none;
  font-size: 16px;
}
.selected {
  background-color: lightgray;
}
.bottom-left {
  margin-top: 20px;
}
.top-left {
  text-align: center;
  border-bottom: 1px solid gray;
}
.leftHoso {
  border-right: 1px solid gray;
}
.items {
  margin: 10px 20px;
}
.menu-item {
  margin-left: 10px;
}
.menu-items {
  margin-bottom: 17px;
}
.titleRight {
  margin-top: 20px;
  margin-bottom: 20px;
}
.img-avatar {
  width: 22%;
  border-radius: 50%;
}
.right {
  margin-left: 40px;
  font-size: 14px;
}
.title {
  font-weight: bold;
}
.right-middle {
  margin-right: 20px;
}
form {
  width: fit-content;
  margin: 0 auto;
  font-size: 14px;
}
input {
  width: 385.4px;
  height: 38.63px;
  border-radius: 5px;
  margin: 2px 0 10px 0;
  padding-left: 5px;
}
</style>