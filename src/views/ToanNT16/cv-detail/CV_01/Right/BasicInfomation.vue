<template>
  <div class="row basic-information">
    <div class="col-12 text-left px-0">
      <div class="header h4 font-weight-bold pl-3 text-uppercase">
        Thông tin cơ bản
      </div>
    </div>
    <div class="col-12">
      <div class="row">
        <div class="col-1 px-0">
          <i class="fa fa-birthday-cake"></i>
        </div>
        <div class="col-10">
          <div contenteditable="true" id="birthday" class="custom-outline">
            01/01/1995
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="row">
        <div class="col-1 px-0"><i class="fa fa-transgender"></i></div>
        <div class="col-10">
          <div contenteditable="true" id="gender" class="custom-outline">
            Nam
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 text-left">
      <div class="row">
        <div class="col-1 px-0"><i class="fa fa-phone"></i></div>
        <div class="col-10">
          <div contenteditable="true" id="phone" class="custom-outline">
            0845684888
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 text-left" style="margin-left: -0.2rem">
      <div class="row">
        <div class="col-1 px-0"><i class="material-icons">email</i></div>
        <div class="col-10">
          <div contenteditable="true" id="email" class="custom-outline">
            nguyenthetoan1606@gmail.com
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 text-left" style="margin-left: -0.3rem">
      <div class="row">
        <div class="col-1 px-0">
          <i class="material-icons">edit_location</i>
        </div>
        <div class="col-10">
          <div contenteditable="true" id="address" class="custom-outline">
            131 Phan Đình Giót, Thanh Xuân, Hà Nội
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 text-left">
      <div class="row">
        <div class="col-1 px-0">
          <i class="fa fa-facebook-official"></i>
        </div>
        <div class="col-10">
          <div contenteditable="true" id="facebook" class="custom-outline">
            https://www.facebook.com/toanfptedu/
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicInfomation",
};
</script>

<style scoped>
.header {
  border-left: 4px solid gray;
  color: #fcb617;
  line-height: 1.2rem;
  font-weight: 1.2rem;
}

.basic-information {
  padding: 0.5rem;
}

.basic-information:hover {
  box-shadow: 0 0 0 2px #ccc inset;
}
</style>